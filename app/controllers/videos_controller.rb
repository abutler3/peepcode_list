class VideosController < ApplicationController
  respond_to :json

  def index
    @videos = Video.all
    respond_with @videos
    # Fetch all videos and render in json format
  end
end
