class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :photo_id, :user, :created_at, :updated_at
end
