class Feed < ActiveRecord::Base

	has_many :items

	validates :title, :url, :feedurl, presence: true
end
