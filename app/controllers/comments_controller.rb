class CommentsController < ApplicationController
  before_action :set_photo
  before_action :set_comment, only: [:edit, :update, :destroy]

  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @photo.comments.all, status: 200 }
    end 
  end

  def create
    @comment = @photo.comments.build(comment_params)
    render json: @comment, status: 201
  end

  # def create
  #   comment = @photo.comments.build(comment_params)
  #   comment.user = current_user
    
  #   if comment.save
  #     redirect_to photo_comments_path(comment.photo)
  #   else
  #     render 'index'
  #   end
  # end

  def edit
  end

  def update
    if @comment.update(comment_params)
      redirect_to photo_comments_path(@photo)
    else 
      render 'edit'
    end
  end
  
  def destroy
    @comment.destroy
    redirect_to photo_path(@photo)
  end

  private
  
    def comment_params
      params.require(:comment).permit(:content)
    end

    def set_photo
      @photo = Photo.find_by(id: params[:photo_id])
    end

    def set_comment
      @comment = @photo.comments.find_by(id: params[:id])
    end

end
