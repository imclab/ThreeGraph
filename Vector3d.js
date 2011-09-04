function Vector3d(x, y, z)
{
  this.x = x;
  this.y = y;
  this.z = z;
}

Vector3d.origin = function()
{
  return new Vector3d(0, 0, 0);
}

Vector3d.prototype.add = function(vector2)
{
  return new Vector3d(
    this.x + vector2.x,
    this.y + vector2.y,
    this.z + vector2.z
  );
}

Vector3d.prototype.subtract = function(vector2)
{
  return new Vector3d(
    this.x - vector2.x,
    this.y - vector2.y,
    this.z - vector2.z
  );
}

Vector3d.prototype.divide = function(scalar)
{
  return new Vector3d(
    this.x / scalar,
    this.y / scalar,
    this.z / scalar
  );
}

Vector3d.prototype.distance = function(vector2)
{
  return Math.sqrt(Math.pow(this.x - vector2.x, 2) +
                   Math.pow(this.y - vector2.y, 2) +
                   Math.pow(this.z - vector2.z, 2));
}

Vector3d.prototype.directionTo = function(vector2)
{
  return vector2.subtract(this)
    .divide(this.distance(vector2));
}

Vector3d.prototype.length = function()
{
  return this.distance(Vector3d.origin());
}

