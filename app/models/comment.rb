class Comment < ApplicationRecord
  belongs_to :photo
  belongs_to :user

  validates :content, length: { minimum: 3 }
  validates :content, presence: true

  attr :comment_username
  
  def comment_username
    self.user.username
  end
end
