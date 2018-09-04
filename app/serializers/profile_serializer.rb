class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :bio
  has_many :photos, through: :user
  
end
