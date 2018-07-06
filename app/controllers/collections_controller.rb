class CollectionsController < ApplicationController

  def new 
    @collection = Collection.new
  end

  def create
    @collection = current_user.collections.build(collection_params)
    redirect_to @collection
  end

  def show
    @collection = Collection.find_by(id: params[:id])
  end

  private 
    def collection_params
      params.require(:collection).permit(:name)
    end
end
