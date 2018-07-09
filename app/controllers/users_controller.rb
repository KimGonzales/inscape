class UsersController < ApplicationController

  def most_active_user
    @user = User.most_active_user
  end
end
