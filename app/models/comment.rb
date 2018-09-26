class Comment < ApplicationRecord
  belongs_to :photo
  belongs_to :user

  validates :content, length: { minimum: 3 }
  validates :content, presence: true
end
