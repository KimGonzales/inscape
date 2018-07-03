class CommentsController < ApplicationController

  def index 
    @photo = Photo.find(params[:photo_id])
  end
  def create
    @photo = Photo.find(params[:photo_id])
    @comment = @photo.comments.build(comment_params)
    @comment.user_id = current_user.id
    @comment.save!
    redirect_to photo_path(@photo)
  end
  
  def destroy
    @photo = Photo.find(params[:photo_id])
    @comment = @photo.comments.find(params[:id])
    @comment.destroy
    redirect_to photo_path(@photo)
  end

  private
    def comment_params
      params.require(:comment).permit(:content)
    end
end
