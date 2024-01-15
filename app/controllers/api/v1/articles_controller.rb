class Api::V1::ArticlesController < ApplicationController
  def index
    render json: Blog.all
  end

  def set_article_stats
    blog = Blog.find(params[:article_id])
    attribute = params[:event].underscore.to_sym
    blog.update(attribute => blog[attribute] + 1)
    ctr = blog.sign_up.to_f/blog.page_view if blog.page_view!=0
    blog.update(ctr: ctr);
  end
end
