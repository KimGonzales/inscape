class User < ApplicationRecord
  has_many :photos, dependent: :destroy
  has_one :profile, dependent: :destroy 
  has_many :comments

  after_create :create_profile

  attr :username
 
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers =>[:facebook]

    def self.from_omniauth(auth)
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.email = auth.info.email
        user.password = Devise.friendly_token[0,20]
     end      
    end

  def username
    self.email.gsub(/(@)(.*?)$/, "").capitalize
  end 
    
end
