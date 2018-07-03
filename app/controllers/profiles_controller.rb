class ProfilesController < ApplicationController
  before_action :set_profile, only: [:show, :edit, :update]

  def show
    @photos = @profile.user.photos.order('created_at DESC')
  end

  def edit
    @photos = @profile.photos
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
      @profile = Profile.find(params[:id])
    end

    def profile_params
      params.require(:profile).permit(:bio, photos_attributes:[:id, :featured_status])
    end

end 
