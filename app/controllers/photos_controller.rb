class PhotosController < ApplicationController
  before_action :find_photo, only: [:show, :edit, :update, :destroy]
    
	def index
		if params[:profile_id].nil?
			@photos = Photo.all.order("created_at DESC")
		else
			@profile = Profile.find_by(id: params[:profile_id])
			@photos = @profile.photos.order("created_at DESC")
		end
	end

	def show
	end

	def new
		@photo = current_user.photos.build
	end
	
	def create
		@photo = current_user.photos.build(photo_params)
		if @photo.save
			redirect_to @photo, notice: "Your photo was successfully added!"
		else
			render :new
		end
	end


	def edit
	end

	def update
		if !params[:profile_id].nil? && @photo.update(photo_params)
			@profile = Profile.find_by(id: params[:profile_id])
			redirect_to @profile, notice: "Your profile was successfully updated!"
		elsif @photo.update(photo_params)
			redirect_to @photo, notice: "Your photo was successfully updated!"
		else
			render :edit
		end
	end

	def destroy
		if current_user.photos.include?(@photo)
			@photo.destroy
			redirect_to root_path, notice: "Your photo was successfully deleted."
		else
			redirect_to @photo, notice: "You do not have permissions to delete this photo."
		end
	end
	

	private
	
		def photo_params
			params.require(:photo).permit(:title, :description, :image, :featured_status)
		end

		def find_photo
			@photo = Photo.find(params[:id])
		end

end
