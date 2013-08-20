class Api::FeedsController < Api::BaseController

  before_action :set_feed, only: [:show, :update, :destroy]

  # GET /feeds
  def index
    respond_with :api, Feed.order(created_at: :desc).all
  end
 
  # GET /feeds/1
  def show
    respond_with :api, @feed
  end
 
  # POST /feeds
  def create
    respond_with :api, Feed.create(feed_params)
  end
 
  # PATCH/PUT /feeds/1
  def update
    respond_with :api, @feed.update(feed_params)
  end
 
  # DELETE /feeds/1
  def destroy
    respond_with :api, @feed.destroy
  end

  private
  
  # Use callbacks to share common setup or constraints between actions.
  def set_feed
    @feed = Feed.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def feed_params
    params.require(:feed).permit(:title, :url, :feedurl)
  end
end
