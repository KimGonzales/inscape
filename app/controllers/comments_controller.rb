class CommentsController < ApplicationController
  before_action :set_comment, only: [:edit, :update, :destory]

  def index
  end
  
  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
    def set_comment
      @comment = Comment.find_by(id: params[:id])
    end
end
