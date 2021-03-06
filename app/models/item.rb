class Item < ActiveRecord::Base

	attr_accessor :link, :author, :publishedDate, :contentSnippet, :categories

	belongs_to :feed

	validates :title, :url, uniqueness: true

  	# We went to display grandfather by default in the output JSON
  	def as_json(options={})
      super(:include =>[:feed])
  	end
end
