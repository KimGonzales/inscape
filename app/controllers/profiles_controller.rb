class ProfilesController < ApplicationController
    
    def show
        @user = User.find_by(id: params[:user_id])
        @photos = @user.photos.order("created_at ASC")
    end

end 