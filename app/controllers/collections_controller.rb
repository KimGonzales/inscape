class CollectionsController < ApplicationController
  before_action :set_photo, only: [:new, :create, :edit, :udpate, :destroy]
  before_action :set_collection, only: [:destroy]
  
  def index
    @collections = current_user.collections
  end

  def new
    @collection = Collection.new
  end

  def create
    @collection = current_user.collections.find_or_initialize_by(name: params[:collection][:name])
    @collection.photos << @photo
    @collection.save

    if @collection.save
      redirect_to collection_path(@collection)
    else
      render 'new'
    end
  end

  def show
    @collection = Collection.find_by(id: params[:id])
  end

  def destroy
    @collection.photos.delete(@photo)
  end

private 
  def set_photo
    if !params[:photo_id].nil?
    @photo = Photo.find_by(id: params[:photo_id])
    end
  end

  def set_collection
    @collection = Collection.find_by(id: params[:id])
  end

end


# i want my user to click a 'collect' button on a photo
# they will be able to choose a drop down of either a new or existing collection
# and the photo will be put into that collection
# the collection will be rendered 