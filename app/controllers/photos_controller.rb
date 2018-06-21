class PhotosController < ApplicationController
    before_action :find_photo, only: [:show, :edit, :update, :destroy]
    
    def index
        @photos = Photo.all
    end

    def show 
    end

    def new
        @photo = Photo.new
    end
    
    def create
        @photo = Photo.new(photo_params)
        if @photo.save
            redirect_to @photo, notice: "Your photo was successfully added!"
        else
            render :new
        end
    end


    def edit
    end

    def update
        if @photo.update(photo_params)
            redirect_to @photo, notice: "Your photo was successfully updated!"
        else
            render :edit
        end
    end

    private
    
        def photo_params
            params.require(:photo).permit(:title, :description)
        end

        def find_photo
            @photo = Photo.find(params[:id])
        end

end
