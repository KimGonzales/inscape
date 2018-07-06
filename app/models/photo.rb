class Photo < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates :image, :title, :description, presence: true
  validates :user, presence: true

  FEATURED_STATUS = {
    not_featured: 0,
    featured: 1
  }

  def featured?
    self.featured_status == FEATURED_STATUS[:featured]
  end

  def not_featured?
    self.featured_status == FEATURED_STATUS[:not_featured]
  end

  def myPhoto
    ActionController::Base.helpers.image_tag("#{image.url(:thumb)}")
  end
  
  def self.photos_by_comment_count
    Photo.joins(:comments).select("photos.*, count(comments.id) as comment_count").group('photos.id').order("comment_count DESC")
  end

  def self.top_photo
    Photo.photos_by_comment_count.first
  end

end
