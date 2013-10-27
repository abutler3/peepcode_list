require 'spec_helper'

describe Video do
  it "should not allow duplicates" do
    @video1 = Video.create(link: "drewbutler.com")
    @video2 = Video.create(link: "drewbutler.com")

    Video.count.should == 1
  end
end
