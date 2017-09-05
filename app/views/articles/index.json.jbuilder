json.array! @articles, partial: 'articles/article', as: :article
json.articles do |
  json.array! @articles do |article|
    json.id article[:id]
    json.title article[:title]
    json.body article[:body]
  end
end