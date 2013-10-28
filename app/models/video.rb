class Video < ActiveRecord::Base
  attr_accessible :image, :link, :title, :watched

  validates_uniqueness_of :link, scope: :id

end
