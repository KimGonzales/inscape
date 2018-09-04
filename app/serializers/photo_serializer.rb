class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :description, :title, :image_file_name
end
