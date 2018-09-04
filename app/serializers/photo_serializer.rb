class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :description, :title, :image_file_name
  belongs_to :user
  has_many :comments
end
