class Feed < ActiveRecord::Base

	has_many :items, dependent: :destroy

	validates :title, :url, :feedurl, presence: true
end
