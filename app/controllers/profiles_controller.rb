class ProfilesController < ApplicationController
    before_action :set_profile, only: [:show, :edit, :update]

    def show
        @photos = @profile.photos.order('created_at DESC')
    end

    def edit
    end

    def update
        if @profile.update(profile_params)
            redirect_to @profile
        else
            render :edit
        end
    end

    private
    
      def set_profile
        @profile = Profile.find_by(id: params[:id])
      end

      def profile_params
        params.require(:profile).permit(:bio)
      end




end 