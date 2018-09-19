class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :description, :title, :image, :created_at
  
  belongs_to :user
  has_many :comments
end
