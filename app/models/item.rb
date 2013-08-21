class Item < ActiveRecord::Base

	attr_accessor :link, :author, :publishedDate, :contentSnippet, :categories

	belongs_to :feed
end
