class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :photo_id, :created_at, :updated_at

  belongs_to :user
  belongs_to :photo
end
