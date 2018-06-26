class ApplicationController < ActionController::Base
	protect_from_forgery with: :exception
	#it raises an "Exception" if there isn't sufficient protection, or if there is a CSFR-type request. The "Exception" is whatever caused the fault to begin with. This forces Rails to tell you what caused the exception
	before_action :authenticate_user! 
	
	def after_sign_in_path_for(resource)
    request.env['omniauth.origin'] || root_path
	end

end
