class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :description, :title, :image, :created_at, :formatted_date
  
  belongs_to :user
  has_many :comments
end
