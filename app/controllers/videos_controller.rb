class VideosController < ApplicationController
  respond_to :json

  def index
    @videos = Video.all
    respond_with @videos
    # Fetch all videos and render in json format
  end

  def show
    @video = Video.find(params[:id])
    respond_with @video
  end

  def update
    @video = Video.find(params[:id])
    if [true, false, "true", "false"].include?(params[:watched])
    # If params are true or false, then update
      @video.update_attributes(watched: params[:watched])
      # Call update_attributes and only updated the watched attributed and
      # expect a parameter passed in called watched
      # Sets value of watched and save
      respond_with @video
    else
      render nothing: true, status: 304 #not modified
    end
  end
end
