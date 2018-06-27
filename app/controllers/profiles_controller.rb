class ProfilesController < ApplicationController

    def show
        @photos = @profile.photos.order("created_at ASC")
    end




end 