module PhotosHelper
  def photo_date(photo)
    photo.created_at.strftime("%b %d, %Y")
  end
end
