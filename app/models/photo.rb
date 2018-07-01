class Photo < ApplicationRecord
	belongs_to :user
	has_one :profile, through: :user
	has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
	validates :image, :title, :description, presence: true

	def myPhoto
		ActionController::Base.helpers.image_tag("#{image.url(:thumb)}")
	end
end
