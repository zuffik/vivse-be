Object.defineProperty(exports, '__esModule', { value: true });

const { Decimal } = require('./runtime/index-browser');

const Prisma = {};

exports.Prisma = Prisma;

/**
 * Prisma Client JS version: 3.9.1
 * Query Engine version: bcc2ff906db47790ee902e7bbc76d7ffb1893009
 */
Prisma.prismaVersion = {
  client: '3.9.1',
  engine: 'bcc2ff906db47790ee902e7bbc76d7ffb1893009',
};

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.validator = () => (val) => val;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull';
Prisma.JsonNull = 'JsonNull';
Prisma.AnyNull = 'AnyNull';

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) {
  return x;
}

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  name: 'name',
  password: 'password',
});

exports.Prisma.AlbumScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  label: 'label',
  mainPhotoId: 'mainPhotoId',
});

exports.Prisma.ImageFileScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  original: 'original',
  small: 'small',
  large: 'large',
});

exports.Prisma.PhotoScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  originalFileId: 'originalFileId',
  editedFileId: 'editedFileId',
  albumId: 'albumId',
  label: 'label',
});

exports.Prisma.UrlScalarFieldEnum = makeEnum({
  token: 'token',
  createdAt: 'createdAt',
  expiresAt: 'expiresAt',
  type: 'type',
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc',
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive',
});
exports.UrlType = makeEnum({
  PICK: 'PICK',
  DOWNLOAD: 'DOWNLOAD',
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Album: 'Album',
  ImageFile: 'ImageFile',
  Photo: 'Photo',
  Url: 'Url',
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    );
  }
}
exports.PrismaClient = PrismaClient;

Object.assign(exports, Prisma);
