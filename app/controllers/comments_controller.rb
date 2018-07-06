class CommentsController < ApplicationController
  before_action :set_photo

  def index
  end

  def create
    @comment = @photo.comments.build(comment_params)
    @comment.user = current_user
    
    if @comment.save
      redirect_to photo_comments_path(@photo)
    else 
      render 'index'
    end
  end
  
  def destroy
    @comment = @photo.comments.find(params[:id])
    @comment.destroy
    redirect_to photo_path(@photo)
  end

  private
  
    def comment_params
      params.require(:comment).permit(:content)
    end

    def set_photo
      @photo = Photo.find(params[:photo_id])
    end

end
