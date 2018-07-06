class CollectionsController < ApplicationController

  def new
    @collection = Collection.new
  end

  def create
    @collection = current_user.collections.find_or_initialize_by(name: params[:collection][:name])
    @collection.photos << Photo.find(params[:photo_id])
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

end


# i want my user to click a 'collect' button on a photo
# they will be able to choose a drop down of either a new or existing collection
# and the photo will be put into that collection
# the collection will be rendered 