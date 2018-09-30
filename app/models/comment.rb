class Comment < ApplicationRecord
  belongs_to :photo
  belongs_to :user

  validates :content, length: { minimum: 1 }
  validates :content, presence: true
end
