class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception

  helper_method :current_user, :authenticate_user
  before_filter :set_headers

  protected

  def set_headers
  	response.headers["X-UA-Compatible"] = "IE=Edge"
  end

  private

  def current_user
    @current_user ||= User.find_by_email(session[:email]) if session[:email]
  end
end
