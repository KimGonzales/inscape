class Comment < ApplicationRecord
  belongs_to :photo
  belongs_to :user

  validates :content, length: { minimum: 2 }
end
