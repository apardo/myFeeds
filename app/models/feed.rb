class Feed < ActiveRecord::Base

	validates :title, :url, :feedurl, presence: true
end
