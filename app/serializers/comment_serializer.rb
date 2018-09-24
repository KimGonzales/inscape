class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :comment_username, :photo_id, :created_at, :updated_at
end
