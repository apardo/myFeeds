class Api::ItemsController < Api::BaseController

  before_action :set_item, only: [:show, :update, :destroy]

  # GET /items
  def index
    if params[:feedId]
      respond_with :api, Item.where(feed_id: params[:feedId]).order(published_at: :desc)
    else
      respond_with :api, Item.order(published_at: :desc)
    end
  end
 
  # GET /items/1
  def show
    respond_with :api, @item
  end
 
  # POST /items
  def create
    data = params.to_a[0]
    feed = Feed.find(data[1][0])
    entries = data[1][1]['entries']
    entries.each do |d|
      item = Item.new(d)
      item.feed = feed
      item.url = d['link']
      item.published_at = d['publishedDate']
      item.save
    end
    render :json => {}, status: :ok
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
  def set_item
    @item = Item.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def feed_params
    params.require(:item).permit(:title, :url, :content, :published_at)
  end
end
