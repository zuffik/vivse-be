
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  email: string
  name: string | null
  password: string
}

/**
 * Model Album
 * 
 */
export type Album = {
  id: string
  createdAt: Date
  label: string
  mainPhotoId: string
}

/**
 * Model ImageFile
 * 
 */
export type ImageFile = {
  id: string
  createdAt: Date
  original: string
  small: string
  large: string
}

/**
 * Model Photo
 * 
 */
export type Photo = {
  id: string
  createdAt: Date
  originalFileId: string
  editedFileId: string
  albumId: string
  label: string
}

/**
 * Model Url
 * 
 */
export type Url = {
  token: string
  createdAt: Date
  expiresAt: Date
  type: UrlType
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const UrlType: {
  PICK: 'PICK',
  DOWNLOAD: 'DOWNLOAD'
};

export type UrlType = (typeof UrlType)[keyof typeof UrlType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<GlobalReject>;

  /**
   * `prisma.imageFile`: Exposes CRUD operations for the **ImageFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageFiles
    * const imageFiles = await prisma.imageFile.findMany()
    * ```
    */
  get imageFile(): Prisma.ImageFileDelegate<GlobalReject>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<GlobalReject>;

  /**
   * `prisma.url`: Exposes CRUD operations for the **Url** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Urls
    * const urls = await prisma.url.findMany()
    * ```
    */
  get url(): Prisma.UrlDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.8.1
   * Query Engine version: 34df67547cf5598f5a6cd3eb45f14ee70c3fb86f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Album: 'Album',
    ImageFile: 'ImageFile',
    Photo: 'Photo',
    Url: 'Url'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AlbumCountOutputType
   */


  export type AlbumCountOutputType = {
    photos: number
  }

  export type AlbumCountOutputTypeSelect = {
    photos?: boolean
  }

  export type AlbumCountOutputTypeGetPayload<
    S extends boolean | null | undefined | AlbumCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? AlbumCountOutputType
    : S extends undefined
    ? never
    : S extends AlbumCountOutputTypeArgs
    ?'include' extends U
    ? AlbumCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof AlbumCountOutputType ?AlbumCountOutputType [P]
  : 
     never
  } 
    : AlbumCountOutputType
  : AlbumCountOutputType




  // Custom InputTypes

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     * 
    **/
    select?: AlbumCountOutputTypeSelect | null
  }



  /**
   * Count Type PhotoCountOutputType
   */


  export type PhotoCountOutputType = {
    Album: number
  }

  export type PhotoCountOutputTypeSelect = {
    Album?: boolean
  }

  export type PhotoCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PhotoCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PhotoCountOutputType
    : S extends undefined
    ? never
    : S extends PhotoCountOutputTypeArgs
    ?'include' extends U
    ? PhotoCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PhotoCountOutputType ?PhotoCountOutputType [P]
  : 
     never
  } 
    : PhotoCountOutputType
  : PhotoCountOutputType




  // Custom InputTypes

  /**
   * PhotoCountOutputType without action
   */
  export type PhotoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PhotoCountOutputType
     * 
    **/
    select?: PhotoCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
     never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
  }



  /**
   * Model Album
   */


  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    label: string | null
    mainPhotoId: string | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    label: string | null
    mainPhotoId: string | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    createdAt: number
    label: number
    mainPhotoId: number
    _all: number
  }


  export type AlbumMinAggregateInputType = {
    id?: true
    createdAt?: true
    label?: true
    mainPhotoId?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    createdAt?: true
    label?: true
    mainPhotoId?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    createdAt?: true
    label?: true
    mainPhotoId?: true
    _all?: true
  }

  export type AlbumAggregateArgs = {
    /**
     * Filter which Album to aggregate.
     * 
    **/
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     * 
    **/
    orderBy?: Enumerable<AlbumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs = {
    where?: AlbumWhereInput
    orderBy?: Enumerable<AlbumOrderByWithAggregationInput>
    by: Array<AlbumScalarFieldEnum>
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }


  export type AlbumGroupByOutputType = {
    id: string
    createdAt: Date
    label: string
    mainPhotoId: string
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Promise<
    Array<
      PickArray<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect = {
    id?: boolean
    createdAt?: boolean
    label?: boolean
    photos?: boolean | PhotoFindManyArgs
    mainPhotoId?: boolean
    main?: boolean | PhotoArgs
    _count?: boolean | AlbumCountOutputTypeArgs
  }

  export type AlbumInclude = {
    photos?: boolean | PhotoFindManyArgs
    main?: boolean | PhotoArgs
    _count?: boolean | AlbumCountOutputTypeArgs
  }

  export type AlbumGetPayload<
    S extends boolean | null | undefined | AlbumArgs,
    U = keyof S
      > = S extends true
        ? Album
    : S extends undefined
    ? never
    : S extends AlbumArgs | AlbumFindManyArgs
    ?'include' extends U
    ? Album  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'photos'
        ? Array < PhotoGetPayload<S['include'][P]>>  :
        P extends 'main'
        ? PhotoGetPayload<S['include'][P]> :
        P extends '_count'
        ? AlbumCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Album ?Album [P]
  : 
          P extends 'photos'
        ? Array < PhotoGetPayload<S['select'][P]>>  :
        P extends 'main'
        ? PhotoGetPayload<S['select'][P]> :
        P extends '_count'
        ? AlbumCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Album
  : Album


  type AlbumCountArgs = Merge<
    Omit<AlbumFindManyArgs, 'select' | 'include'> & {
      select?: AlbumCountAggregateInputType | true
    }
  >

  export interface AlbumDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AlbumFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Album'> extends True ? CheckSelect<T, Prisma__AlbumClient<Album>, Prisma__AlbumClient<AlbumGetPayload<T>>> : CheckSelect<T, Prisma__AlbumClient<Album | null >, Prisma__AlbumClient<AlbumGetPayload<T> | null >>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AlbumFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Album'> extends True ? CheckSelect<T, Prisma__AlbumClient<Album>, Prisma__AlbumClient<AlbumGetPayload<T>>> : CheckSelect<T, Prisma__AlbumClient<Album | null >, Prisma__AlbumClient<AlbumGetPayload<T> | null >>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlbumFindManyArgs>(
      args?: SelectSubset<T, AlbumFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Album>>, PrismaPromise<Array<AlbumGetPayload<T>>>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
    **/
    create<T extends AlbumCreateArgs>(
      args: SelectSubset<T, AlbumCreateArgs>
    ): CheckSelect<T, Prisma__AlbumClient<Album>, Prisma__AlbumClient<AlbumGetPayload<T>>>

    /**
     * Create many Albums.
     *     @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     *     @example
     *     // Create many Albums
     *     const album = await prisma.album.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumCreateManyArgs>(
      args?: SelectSubset<T, AlbumCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
    **/
    delete<T extends AlbumDeleteArgs>(
      args: SelectSubset<T, AlbumDeleteArgs>
    ): CheckSelect<T, Prisma__AlbumClient<Album>, Prisma__AlbumClient<AlbumGetPayload<T>>>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumUpdateArgs>(
      args: SelectSubset<T, AlbumUpdateArgs>
    ): CheckSelect<T, Prisma__AlbumClient<Album>, Prisma__AlbumClient<AlbumGetPayload<T>>>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumDeleteManyArgs>(
      args?: SelectSubset<T, AlbumDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumUpdateManyArgs>(
      args: SelectSubset<T, AlbumUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumUpsertArgs>(
      args: SelectSubset<T, AlbumUpsertArgs>
    ): CheckSelect<T, Prisma__AlbumClient<Album>, Prisma__AlbumClient<AlbumGetPayload<T>>>

    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AlbumClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    photos<T extends PhotoFindManyArgs = {}>(args?: Subset<T, PhotoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Photo>>, PrismaPromise<Array<PhotoGetPayload<T>>>>;

    main<T extends PhotoArgs = {}>(args?: Subset<T, PhotoArgs>): CheckSelect<T, Prisma__PhotoClient<Photo | null >, Prisma__PhotoClient<PhotoGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * Throw an Error if a Album can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Album to fetch.
     * 
    **/
    where: AlbumWhereUniqueInput
  }


  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * Throw an Error if a Album can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Album to fetch.
     * 
    **/
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     * 
    **/
    orderBy?: Enumerable<AlbumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     * 
    **/
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     * 
    **/
    distinct?: Enumerable<AlbumScalarFieldEnum>
  }


  /**
   * Album findMany
   */
  export type AlbumFindManyArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * Filter, which Albums to fetch.
     * 
    **/
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     * 
    **/
    orderBy?: Enumerable<AlbumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     * 
    **/
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AlbumScalarFieldEnum>
  }


  /**
   * Album create
   */
  export type AlbumCreateArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * The data needed to create a Album.
     * 
    **/
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }


  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs = {
    data: Enumerable<AlbumCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Album update
   */
  export type AlbumUpdateArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * The data needed to update a Album.
     * 
    **/
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     * 
    **/
    where: AlbumWhereUniqueInput
  }


  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs = {
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    where?: AlbumWhereInput
  }


  /**
   * Album upsert
   */
  export type AlbumUpsertArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * The filter to search for the Album to update in case it exists.
     * 
    **/
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     * 
    **/
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }


  /**
   * Album delete
   */
  export type AlbumDeleteArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
    /**
     * Filter which Album to delete.
     * 
    **/
    where: AlbumWhereUniqueInput
  }


  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs = {
    where?: AlbumWhereInput
  }


  /**
   * Album without action
   */
  export type AlbumArgs = {
    /**
     * Select specific fields to fetch from the Album
     * 
    **/
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AlbumInclude | null
  }



  /**
   * Model ImageFile
   */


  export type AggregateImageFile = {
    _count: ImageFileCountAggregateOutputType | null
    _min: ImageFileMinAggregateOutputType | null
    _max: ImageFileMaxAggregateOutputType | null
  }

  export type ImageFileMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    original: string | null
    small: string | null
    large: string | null
  }

  export type ImageFileMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    original: string | null
    small: string | null
    large: string | null
  }

  export type ImageFileCountAggregateOutputType = {
    id: number
    createdAt: number
    original: number
    small: number
    large: number
    _all: number
  }


  export type ImageFileMinAggregateInputType = {
    id?: true
    createdAt?: true
    original?: true
    small?: true
    large?: true
  }

  export type ImageFileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    original?: true
    small?: true
    large?: true
  }

  export type ImageFileCountAggregateInputType = {
    id?: true
    createdAt?: true
    original?: true
    small?: true
    large?: true
    _all?: true
  }

  export type ImageFileAggregateArgs = {
    /**
     * Filter which ImageFile to aggregate.
     * 
    **/
    where?: ImageFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageFiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageFileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImageFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageFiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageFiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageFiles
    **/
    _count?: true | ImageFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageFileMaxAggregateInputType
  }

  export type GetImageFileAggregateType<T extends ImageFileAggregateArgs> = {
        [P in keyof T & keyof AggregateImageFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageFile[P]>
      : GetScalarType<T[P], AggregateImageFile[P]>
  }




  export type ImageFileGroupByArgs = {
    where?: ImageFileWhereInput
    orderBy?: Enumerable<ImageFileOrderByWithAggregationInput>
    by: Array<ImageFileScalarFieldEnum>
    having?: ImageFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageFileCountAggregateInputType | true
    _min?: ImageFileMinAggregateInputType
    _max?: ImageFileMaxAggregateInputType
  }


  export type ImageFileGroupByOutputType = {
    id: string
    createdAt: Date
    original: string
    small: string
    large: string
    _count: ImageFileCountAggregateOutputType | null
    _min: ImageFileMinAggregateOutputType | null
    _max: ImageFileMaxAggregateOutputType | null
  }

  type GetImageFileGroupByPayload<T extends ImageFileGroupByArgs> = Promise<
    Array<
      PickArray<ImageFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageFileGroupByOutputType[P]>
            : GetScalarType<T[P], ImageFileGroupByOutputType[P]>
        }
      >
    >


  export type ImageFileSelect = {
    id?: boolean
    createdAt?: boolean
    original?: boolean
    small?: boolean
    large?: boolean
    originalFor?: boolean | PhotoArgs
    editedFor?: boolean | PhotoArgs
  }

  export type ImageFileInclude = {
    originalFor?: boolean | PhotoArgs
    editedFor?: boolean | PhotoArgs
  }

  export type ImageFileGetPayload<
    S extends boolean | null | undefined | ImageFileArgs,
    U = keyof S
      > = S extends true
        ? ImageFile
    : S extends undefined
    ? never
    : S extends ImageFileArgs | ImageFileFindManyArgs
    ?'include' extends U
    ? ImageFile  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'originalFor'
        ? PhotoGetPayload<S['include'][P]> | null :
        P extends 'editedFor'
        ? PhotoGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ImageFile ?ImageFile [P]
  : 
          P extends 'originalFor'
        ? PhotoGetPayload<S['select'][P]> | null :
        P extends 'editedFor'
        ? PhotoGetPayload<S['select'][P]> | null : never
  } 
    : ImageFile
  : ImageFile


  type ImageFileCountArgs = Merge<
    Omit<ImageFileFindManyArgs, 'select' | 'include'> & {
      select?: ImageFileCountAggregateInputType | true
    }
  >

  export interface ImageFileDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ImageFile that matches the filter.
     * @param {ImageFileFindUniqueArgs} args - Arguments to find a ImageFile
     * @example
     * // Get one ImageFile
     * const imageFile = await prisma.imageFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImageFileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ImageFile'> extends True ? CheckSelect<T, Prisma__ImageFileClient<ImageFile>, Prisma__ImageFileClient<ImageFileGetPayload<T>>> : CheckSelect<T, Prisma__ImageFileClient<ImageFile | null >, Prisma__ImageFileClient<ImageFileGetPayload<T> | null >>

    /**
     * Find the first ImageFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFileFindFirstArgs} args - Arguments to find a ImageFile
     * @example
     * // Get one ImageFile
     * const imageFile = await prisma.imageFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImageFileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ImageFile'> extends True ? CheckSelect<T, Prisma__ImageFileClient<ImageFile>, Prisma__ImageFileClient<ImageFileGetPayload<T>>> : CheckSelect<T, Prisma__ImageFileClient<ImageFile | null >, Prisma__ImageFileClient<ImageFileGetPayload<T> | null >>

    /**
     * Find zero or more ImageFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageFiles
     * const imageFiles = await prisma.imageFile.findMany()
     * 
     * // Get first 10 ImageFiles
     * const imageFiles = await prisma.imageFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageFileWithIdOnly = await prisma.imageFile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFileFindManyArgs>(
      args?: SelectSubset<T, ImageFileFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ImageFile>>, PrismaPromise<Array<ImageFileGetPayload<T>>>>

    /**
     * Create a ImageFile.
     * @param {ImageFileCreateArgs} args - Arguments to create a ImageFile.
     * @example
     * // Create one ImageFile
     * const ImageFile = await prisma.imageFile.create({
     *   data: {
     *     // ... data to create a ImageFile
     *   }
     * })
     * 
    **/
    create<T extends ImageFileCreateArgs>(
      args: SelectSubset<T, ImageFileCreateArgs>
    ): CheckSelect<T, Prisma__ImageFileClient<ImageFile>, Prisma__ImageFileClient<ImageFileGetPayload<T>>>

    /**
     * Create many ImageFiles.
     *     @param {ImageFileCreateManyArgs} args - Arguments to create many ImageFiles.
     *     @example
     *     // Create many ImageFiles
     *     const imageFile = await prisma.imageFile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageFileCreateManyArgs>(
      args?: SelectSubset<T, ImageFileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ImageFile.
     * @param {ImageFileDeleteArgs} args - Arguments to delete one ImageFile.
     * @example
     * // Delete one ImageFile
     * const ImageFile = await prisma.imageFile.delete({
     *   where: {
     *     // ... filter to delete one ImageFile
     *   }
     * })
     * 
    **/
    delete<T extends ImageFileDeleteArgs>(
      args: SelectSubset<T, ImageFileDeleteArgs>
    ): CheckSelect<T, Prisma__ImageFileClient<ImageFile>, Prisma__ImageFileClient<ImageFileGetPayload<T>>>

    /**
     * Update one ImageFile.
     * @param {ImageFileUpdateArgs} args - Arguments to update one ImageFile.
     * @example
     * // Update one ImageFile
     * const imageFile = await prisma.imageFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageFileUpdateArgs>(
      args: SelectSubset<T, ImageFileUpdateArgs>
    ): CheckSelect<T, Prisma__ImageFileClient<ImageFile>, Prisma__ImageFileClient<ImageFileGetPayload<T>>>

    /**
     * Delete zero or more ImageFiles.
     * @param {ImageFileDeleteManyArgs} args - Arguments to filter ImageFiles to delete.
     * @example
     * // Delete a few ImageFiles
     * const { count } = await prisma.imageFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageFileDeleteManyArgs>(
      args?: SelectSubset<T, ImageFileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageFiles
     * const imageFile = await prisma.imageFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageFileUpdateManyArgs>(
      args: SelectSubset<T, ImageFileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ImageFile.
     * @param {ImageFileUpsertArgs} args - Arguments to update or create a ImageFile.
     * @example
     * // Update or create a ImageFile
     * const imageFile = await prisma.imageFile.upsert({
     *   create: {
     *     // ... data to create a ImageFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageFile we want to update
     *   }
     * })
    **/
    upsert<T extends ImageFileUpsertArgs>(
      args: SelectSubset<T, ImageFileUpsertArgs>
    ): CheckSelect<T, Prisma__ImageFileClient<ImageFile>, Prisma__ImageFileClient<ImageFileGetPayload<T>>>

    /**
     * Count the number of ImageFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFileCountArgs} args - Arguments to filter ImageFiles to count.
     * @example
     * // Count the number of ImageFiles
     * const count = await prisma.imageFile.count({
     *   where: {
     *     // ... the filter for the ImageFiles we want to count
     *   }
     * })
    **/
    count<T extends ImageFileCountArgs>(
      args?: Subset<T, ImageFileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageFileAggregateArgs>(args: Subset<T, ImageFileAggregateArgs>): PrismaPromise<GetImageFileAggregateType<T>>

    /**
     * Group by ImageFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageFileGroupByArgs['orderBy'] }
        : { orderBy?: ImageFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageFileGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImageFileClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    originalFor<T extends PhotoArgs = {}>(args?: Subset<T, PhotoArgs>): CheckSelect<T, Prisma__PhotoClient<Photo | null >, Prisma__PhotoClient<PhotoGetPayload<T> | null >>;

    editedFor<T extends PhotoArgs = {}>(args?: Subset<T, PhotoArgs>): CheckSelect<T, Prisma__PhotoClient<Photo | null >, Prisma__PhotoClient<PhotoGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ImageFile findUnique
   */
  export type ImageFileFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ImageFile
     * 
    **/
    select?: ImageFileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageFileInclude | null
    /**
     * Throw an Error if a ImageFile can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ImageFile to fetch.
     * 
    **/
    where: ImageFileWhereUniqueInput
  }


  /**
   * ImageFile findFirst
   */
  export type ImageFileFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ImageFile
     * 
    **/
    select?: ImageFileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageFileInclude | null
    /**
     * Throw an Error if a ImageFile can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ImageFile to fetch.
     * 
    **/
    where?: ImageFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageFiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageFileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageFiles.
     * 
    **/
    cursor?: ImageFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageFiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageFiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageFiles.
     * 
    **/
    distinct?: Enumerable<ImageFileScalarFieldEnum>
  }


  /**
   * ImageFile findMany
   */
  export type ImageFileFindManyArgs = {
    /**
     * Select specific fields to fetch from the ImageFile
     * 
    **/
    select?: ImageFileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageFileInclude | null
    /**
     * Filter, which ImageFiles to fetch.
     * 
    **/
    where?: ImageFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageFiles to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageFileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageFiles.
     * 
    **/
    cursor?: ImageFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageFiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageFiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImageFileScalarFieldEnum>
  }


  /**
   * ImageFile create
   */
  export type ImageFileCreateArgs = {
    /**
     * Select specific fields to fetch from the ImageFile
     * 
    **/
    select?: ImageFileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageFileInclude | null
    /**
     * The data needed to create a ImageFile.
     * 
    **/
    data: XOR<ImageFileCreateInput, ImageFileUncheckedCreateInput>
  }


  /**
   * ImageFile createMany
   */
  export type ImageFileCreateManyArgs = {
    data: Enumerable<ImageFileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ImageFile update
   */
  export type ImageFileUpdateArgs = {
    /**
     * Select specific fields to fetch from the ImageFile
     * 
    **/
    select?: ImageFileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageFileInclude | null
    /**
     * The data needed to update a ImageFile.
     * 
    **/
    data: XOR<ImageFileUpdateInput, ImageFileUncheckedUpdateInput>
    /**
     * Choose, which ImageFile to update.
     * 
    **/
    where: ImageFileWhereUniqueInput
  }


  /**
   * ImageFile updateMany
   */
  export type ImageFileUpdateManyArgs = {
    data: XOR<ImageFileUpdateManyMutationInput, ImageFileUncheckedUpdateManyInput>
    where?: ImageFileWhereInput
  }


  /**
   * ImageFile upsert
   */
  export type ImageFileUpsertArgs = {
    /**
     * Select specific fields to fetch from the ImageFile
     * 
    **/
    select?: ImageFileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageFileInclude | null
    /**
     * The filter to search for the ImageFile to update in case it exists.
     * 
    **/
    where: ImageFileWhereUniqueInput
    /**
     * In case the ImageFile found by the `where` argument doesn't exist, create a new ImageFile with this data.
     * 
    **/
    create: XOR<ImageFileCreateInput, ImageFileUncheckedCreateInput>
    /**
     * In case the ImageFile was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImageFileUpdateInput, ImageFileUncheckedUpdateInput>
  }


  /**
   * ImageFile delete
   */
  export type ImageFileDeleteArgs = {
    /**
     * Select specific fields to fetch from the ImageFile
     * 
    **/
    select?: ImageFileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageFileInclude | null
    /**
     * Filter which ImageFile to delete.
     * 
    **/
    where: ImageFileWhereUniqueInput
  }


  /**
   * ImageFile deleteMany
   */
  export type ImageFileDeleteManyArgs = {
    where?: ImageFileWhereInput
  }


  /**
   * ImageFile without action
   */
  export type ImageFileArgs = {
    /**
     * Select specific fields to fetch from the ImageFile
     * 
    **/
    select?: ImageFileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageFileInclude | null
  }



  /**
   * Model Photo
   */


  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    originalFileId: string | null
    editedFileId: string | null
    albumId: string | null
    label: string | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    originalFileId: string | null
    editedFileId: string | null
    albumId: string | null
    label: string | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    createdAt: number
    originalFileId: number
    editedFileId: number
    albumId: number
    label: number
    _all: number
  }


  export type PhotoMinAggregateInputType = {
    id?: true
    createdAt?: true
    originalFileId?: true
    editedFileId?: true
    albumId?: true
    label?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    createdAt?: true
    originalFileId?: true
    editedFileId?: true
    albumId?: true
    label?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    createdAt?: true
    originalFileId?: true
    editedFileId?: true
    albumId?: true
    label?: true
    _all?: true
  }

  export type PhotoAggregateArgs = {
    /**
     * Filter which Photo to aggregate.
     * 
    **/
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     * 
    **/
    orderBy?: Enumerable<PhotoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs = {
    where?: PhotoWhereInput
    orderBy?: Enumerable<PhotoOrderByWithAggregationInput>
    by: Array<PhotoScalarFieldEnum>
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }


  export type PhotoGroupByOutputType = {
    id: string
    createdAt: Date
    originalFileId: string
    editedFileId: string
    albumId: string
    label: string
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Promise<
    Array<
      PickArray<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect = {
    id?: boolean
    createdAt?: boolean
    originalFileId?: boolean
    originalFile?: boolean | ImageFileArgs
    editedFileId?: boolean
    editedFile?: boolean | ImageFileArgs
    albumId?: boolean
    album?: boolean | AlbumArgs
    label?: boolean
    Album?: boolean | AlbumFindManyArgs
    _count?: boolean | PhotoCountOutputTypeArgs
  }

  export type PhotoInclude = {
    originalFile?: boolean | ImageFileArgs
    editedFile?: boolean | ImageFileArgs
    album?: boolean | AlbumArgs
    Album?: boolean | AlbumFindManyArgs
    _count?: boolean | PhotoCountOutputTypeArgs
  }

  export type PhotoGetPayload<
    S extends boolean | null | undefined | PhotoArgs,
    U = keyof S
      > = S extends true
        ? Photo
    : S extends undefined
    ? never
    : S extends PhotoArgs | PhotoFindManyArgs
    ?'include' extends U
    ? Photo  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'originalFile'
        ? ImageFileGetPayload<S['include'][P]> :
        P extends 'editedFile'
        ? ImageFileGetPayload<S['include'][P]> :
        P extends 'album'
        ? AlbumGetPayload<S['include'][P]> :
        P extends 'Album'
        ? Array < AlbumGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? PhotoCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Photo ?Photo [P]
  : 
          P extends 'originalFile'
        ? ImageFileGetPayload<S['select'][P]> :
        P extends 'editedFile'
        ? ImageFileGetPayload<S['select'][P]> :
        P extends 'album'
        ? AlbumGetPayload<S['select'][P]> :
        P extends 'Album'
        ? Array < AlbumGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? PhotoCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Photo
  : Photo


  type PhotoCountArgs = Merge<
    Omit<PhotoFindManyArgs, 'select' | 'include'> & {
      select?: PhotoCountAggregateInputType | true
    }
  >

  export interface PhotoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PhotoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PhotoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Photo'> extends True ? CheckSelect<T, Prisma__PhotoClient<Photo>, Prisma__PhotoClient<PhotoGetPayload<T>>> : CheckSelect<T, Prisma__PhotoClient<Photo | null >, Prisma__PhotoClient<PhotoGetPayload<T> | null >>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PhotoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PhotoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Photo'> extends True ? CheckSelect<T, Prisma__PhotoClient<Photo>, Prisma__PhotoClient<PhotoGetPayload<T>>> : CheckSelect<T, Prisma__PhotoClient<Photo | null >, Prisma__PhotoClient<PhotoGetPayload<T> | null >>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PhotoFindManyArgs>(
      args?: SelectSubset<T, PhotoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Photo>>, PrismaPromise<Array<PhotoGetPayload<T>>>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
    **/
    create<T extends PhotoCreateArgs>(
      args: SelectSubset<T, PhotoCreateArgs>
    ): CheckSelect<T, Prisma__PhotoClient<Photo>, Prisma__PhotoClient<PhotoGetPayload<T>>>

    /**
     * Create many Photos.
     *     @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     *     @example
     *     // Create many Photos
     *     const photo = await prisma.photo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PhotoCreateManyArgs>(
      args?: SelectSubset<T, PhotoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
    **/
    delete<T extends PhotoDeleteArgs>(
      args: SelectSubset<T, PhotoDeleteArgs>
    ): CheckSelect<T, Prisma__PhotoClient<Photo>, Prisma__PhotoClient<PhotoGetPayload<T>>>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PhotoUpdateArgs>(
      args: SelectSubset<T, PhotoUpdateArgs>
    ): CheckSelect<T, Prisma__PhotoClient<Photo>, Prisma__PhotoClient<PhotoGetPayload<T>>>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PhotoDeleteManyArgs>(
      args?: SelectSubset<T, PhotoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PhotoUpdateManyArgs>(
      args: SelectSubset<T, PhotoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
    **/
    upsert<T extends PhotoUpsertArgs>(
      args: SelectSubset<T, PhotoUpsertArgs>
    ): CheckSelect<T, Prisma__PhotoClient<Photo>, Prisma__PhotoClient<PhotoGetPayload<T>>>

    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PhotoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    originalFile<T extends ImageFileArgs = {}>(args?: Subset<T, ImageFileArgs>): CheckSelect<T, Prisma__ImageFileClient<ImageFile | null >, Prisma__ImageFileClient<ImageFileGetPayload<T> | null >>;

    editedFile<T extends ImageFileArgs = {}>(args?: Subset<T, ImageFileArgs>): CheckSelect<T, Prisma__ImageFileClient<ImageFile | null >, Prisma__ImageFileClient<ImageFileGetPayload<T> | null >>;

    album<T extends AlbumArgs = {}>(args?: Subset<T, AlbumArgs>): CheckSelect<T, Prisma__AlbumClient<Album | null >, Prisma__AlbumClient<AlbumGetPayload<T> | null >>;

    Album<T extends AlbumFindManyArgs = {}>(args?: Subset<T, AlbumFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Album>>, PrismaPromise<Array<AlbumGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * Throw an Error if a Photo can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Photo to fetch.
     * 
    **/
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * Throw an Error if a Photo can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Photo to fetch.
     * 
    **/
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     * 
    **/
    orderBy?: Enumerable<PhotoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     * 
    **/
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     * 
    **/
    distinct?: Enumerable<PhotoScalarFieldEnum>
  }


  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * Filter, which Photos to fetch.
     * 
    **/
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     * 
    **/
    orderBy?: Enumerable<PhotoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     * 
    **/
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PhotoScalarFieldEnum>
  }


  /**
   * Photo create
   */
  export type PhotoCreateArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * The data needed to create a Photo.
     * 
    **/
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }


  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs = {
    data: Enumerable<PhotoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Photo update
   */
  export type PhotoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * The data needed to update a Photo.
     * 
    **/
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     * 
    **/
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs = {
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    where?: PhotoWhereInput
  }


  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * The filter to search for the Photo to update in case it exists.
     * 
    **/
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     * 
    **/
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }


  /**
   * Photo delete
   */
  export type PhotoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
    /**
     * Filter which Photo to delete.
     * 
    **/
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs = {
    where?: PhotoWhereInput
  }


  /**
   * Photo without action
   */
  export type PhotoArgs = {
    /**
     * Select specific fields to fetch from the Photo
     * 
    **/
    select?: PhotoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PhotoInclude | null
  }



  /**
   * Model Url
   */


  export type AggregateUrl = {
    _count: UrlCountAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  export type UrlMinAggregateOutputType = {
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
    type: UrlType | null
  }

  export type UrlMaxAggregateOutputType = {
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
    type: UrlType | null
  }

  export type UrlCountAggregateOutputType = {
    token: number
    createdAt: number
    expiresAt: number
    type: number
    _all: number
  }


  export type UrlMinAggregateInputType = {
    token?: true
    createdAt?: true
    expiresAt?: true
    type?: true
  }

  export type UrlMaxAggregateInputType = {
    token?: true
    createdAt?: true
    expiresAt?: true
    type?: true
  }

  export type UrlCountAggregateInputType = {
    token?: true
    createdAt?: true
    expiresAt?: true
    type?: true
    _all?: true
  }

  export type UrlAggregateArgs = {
    /**
     * Filter which Url to aggregate.
     * 
    **/
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     * 
    **/
    orderBy?: Enumerable<UrlOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Urls
    **/
    _count?: true | UrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrlMaxAggregateInputType
  }

  export type GetUrlAggregateType<T extends UrlAggregateArgs> = {
        [P in keyof T & keyof AggregateUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrl[P]>
      : GetScalarType<T[P], AggregateUrl[P]>
  }




  export type UrlGroupByArgs = {
    where?: UrlWhereInput
    orderBy?: Enumerable<UrlOrderByWithAggregationInput>
    by: Array<UrlScalarFieldEnum>
    having?: UrlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrlCountAggregateInputType | true
    _min?: UrlMinAggregateInputType
    _max?: UrlMaxAggregateInputType
  }


  export type UrlGroupByOutputType = {
    token: string
    createdAt: Date
    expiresAt: Date
    type: UrlType
    _count: UrlCountAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  type GetUrlGroupByPayload<T extends UrlGroupByArgs> = Promise<
    Array<
      PickArray<UrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrlGroupByOutputType[P]>
            : GetScalarType<T[P], UrlGroupByOutputType[P]>
        }
      >
    >


  export type UrlSelect = {
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    type?: boolean
  }

  export type UrlGetPayload<
    S extends boolean | null | undefined | UrlArgs,
    U = keyof S
      > = S extends true
        ? Url
    : S extends undefined
    ? never
    : S extends UrlArgs | UrlFindManyArgs
    ?'include' extends U
    ? Url 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Url ?Url [P]
  : 
     never
  } 
    : Url
  : Url


  type UrlCountArgs = Merge<
    Omit<UrlFindManyArgs, 'select' | 'include'> & {
      select?: UrlCountAggregateInputType | true
    }
  >

  export interface UrlDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Url that matches the filter.
     * @param {UrlFindUniqueArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UrlFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UrlFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Url'> extends True ? CheckSelect<T, Prisma__UrlClient<Url>, Prisma__UrlClient<UrlGetPayload<T>>> : CheckSelect<T, Prisma__UrlClient<Url | null >, Prisma__UrlClient<UrlGetPayload<T> | null >>

    /**
     * Find the first Url that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindFirstArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UrlFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UrlFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Url'> extends True ? CheckSelect<T, Prisma__UrlClient<Url>, Prisma__UrlClient<UrlGetPayload<T>>> : CheckSelect<T, Prisma__UrlClient<Url | null >, Prisma__UrlClient<UrlGetPayload<T> | null >>

    /**
     * Find zero or more Urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Urls
     * const urls = await prisma.url.findMany()
     * 
     * // Get first 10 Urls
     * const urls = await prisma.url.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const urlWithTokenOnly = await prisma.url.findMany({ select: { token: true } })
     * 
    **/
    findMany<T extends UrlFindManyArgs>(
      args?: SelectSubset<T, UrlFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Url>>, PrismaPromise<Array<UrlGetPayload<T>>>>

    /**
     * Create a Url.
     * @param {UrlCreateArgs} args - Arguments to create a Url.
     * @example
     * // Create one Url
     * const Url = await prisma.url.create({
     *   data: {
     *     // ... data to create a Url
     *   }
     * })
     * 
    **/
    create<T extends UrlCreateArgs>(
      args: SelectSubset<T, UrlCreateArgs>
    ): CheckSelect<T, Prisma__UrlClient<Url>, Prisma__UrlClient<UrlGetPayload<T>>>

    /**
     * Create many Urls.
     *     @param {UrlCreateManyArgs} args - Arguments to create many Urls.
     *     @example
     *     // Create many Urls
     *     const url = await prisma.url.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UrlCreateManyArgs>(
      args?: SelectSubset<T, UrlCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Url.
     * @param {UrlDeleteArgs} args - Arguments to delete one Url.
     * @example
     * // Delete one Url
     * const Url = await prisma.url.delete({
     *   where: {
     *     // ... filter to delete one Url
     *   }
     * })
     * 
    **/
    delete<T extends UrlDeleteArgs>(
      args: SelectSubset<T, UrlDeleteArgs>
    ): CheckSelect<T, Prisma__UrlClient<Url>, Prisma__UrlClient<UrlGetPayload<T>>>

    /**
     * Update one Url.
     * @param {UrlUpdateArgs} args - Arguments to update one Url.
     * @example
     * // Update one Url
     * const url = await prisma.url.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UrlUpdateArgs>(
      args: SelectSubset<T, UrlUpdateArgs>
    ): CheckSelect<T, Prisma__UrlClient<Url>, Prisma__UrlClient<UrlGetPayload<T>>>

    /**
     * Delete zero or more Urls.
     * @param {UrlDeleteManyArgs} args - Arguments to filter Urls to delete.
     * @example
     * // Delete a few Urls
     * const { count } = await prisma.url.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UrlDeleteManyArgs>(
      args?: SelectSubset<T, UrlDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Urls
     * const url = await prisma.url.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UrlUpdateManyArgs>(
      args: SelectSubset<T, UrlUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Url.
     * @param {UrlUpsertArgs} args - Arguments to update or create a Url.
     * @example
     * // Update or create a Url
     * const url = await prisma.url.upsert({
     *   create: {
     *     // ... data to create a Url
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Url we want to update
     *   }
     * })
    **/
    upsert<T extends UrlUpsertArgs>(
      args: SelectSubset<T, UrlUpsertArgs>
    ): CheckSelect<T, Prisma__UrlClient<Url>, Prisma__UrlClient<UrlGetPayload<T>>>

    /**
     * Count the number of Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlCountArgs} args - Arguments to filter Urls to count.
     * @example
     * // Count the number of Urls
     * const count = await prisma.url.count({
     *   where: {
     *     // ... the filter for the Urls we want to count
     *   }
     * })
    **/
    count<T extends UrlCountArgs>(
      args?: Subset<T, UrlCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UrlAggregateArgs>(args: Subset<T, UrlAggregateArgs>): PrismaPromise<GetUrlAggregateType<T>>

    /**
     * Group by Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UrlGroupByArgs['orderBy'] }
        : { orderBy?: UrlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Url.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UrlClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Url findUnique
   */
  export type UrlFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Url
     * 
    **/
    select?: UrlSelect | null
    /**
     * Throw an Error if a Url can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Url to fetch.
     * 
    **/
    where: UrlWhereUniqueInput
  }


  /**
   * Url findFirst
   */
  export type UrlFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Url
     * 
    **/
    select?: UrlSelect | null
    /**
     * Throw an Error if a Url can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Url to fetch.
     * 
    **/
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     * 
    **/
    orderBy?: Enumerable<UrlOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urls.
     * 
    **/
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urls.
     * 
    **/
    distinct?: Enumerable<UrlScalarFieldEnum>
  }


  /**
   * Url findMany
   */
  export type UrlFindManyArgs = {
    /**
     * Select specific fields to fetch from the Url
     * 
    **/
    select?: UrlSelect | null
    /**
     * Filter, which Urls to fetch.
     * 
    **/
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     * 
    **/
    orderBy?: Enumerable<UrlOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Urls.
     * 
    **/
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UrlScalarFieldEnum>
  }


  /**
   * Url create
   */
  export type UrlCreateArgs = {
    /**
     * Select specific fields to fetch from the Url
     * 
    **/
    select?: UrlSelect | null
    /**
     * The data needed to create a Url.
     * 
    **/
    data: XOR<UrlCreateInput, UrlUncheckedCreateInput>
  }


  /**
   * Url createMany
   */
  export type UrlCreateManyArgs = {
    data: Enumerable<UrlCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Url update
   */
  export type UrlUpdateArgs = {
    /**
     * Select specific fields to fetch from the Url
     * 
    **/
    select?: UrlSelect | null
    /**
     * The data needed to update a Url.
     * 
    **/
    data: XOR<UrlUpdateInput, UrlUncheckedUpdateInput>
    /**
     * Choose, which Url to update.
     * 
    **/
    where: UrlWhereUniqueInput
  }


  /**
   * Url updateMany
   */
  export type UrlUpdateManyArgs = {
    data: XOR<UrlUpdateManyMutationInput, UrlUncheckedUpdateManyInput>
    where?: UrlWhereInput
  }


  /**
   * Url upsert
   */
  export type UrlUpsertArgs = {
    /**
     * Select specific fields to fetch from the Url
     * 
    **/
    select?: UrlSelect | null
    /**
     * The filter to search for the Url to update in case it exists.
     * 
    **/
    where: UrlWhereUniqueInput
    /**
     * In case the Url found by the `where` argument doesn't exist, create a new Url with this data.
     * 
    **/
    create: XOR<UrlCreateInput, UrlUncheckedCreateInput>
    /**
     * In case the Url was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UrlUpdateInput, UrlUncheckedUpdateInput>
  }


  /**
   * Url delete
   */
  export type UrlDeleteArgs = {
    /**
     * Select specific fields to fetch from the Url
     * 
    **/
    select?: UrlSelect | null
    /**
     * Filter which Url to delete.
     * 
    **/
    where: UrlWhereUniqueInput
  }


  /**
   * Url deleteMany
   */
  export type UrlDeleteManyArgs = {
    where?: UrlWhereInput
  }


  /**
   * Url without action
   */
  export type UrlArgs = {
    /**
     * Select specific fields to fetch from the Url
     * 
    **/
    select?: UrlSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    label: 'label',
    mainPhotoId: 'mainPhotoId'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const ImageFileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    original: 'original',
    small: 'small',
    large: 'large'
  };

  export type ImageFileScalarFieldEnum = (typeof ImageFileScalarFieldEnum)[keyof typeof ImageFileScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    originalFileId: 'originalFileId',
    editedFileId: 'editedFileId',
    albumId: 'albumId',
    label: 'label'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const UrlScalarFieldEnum: {
    token: 'token',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    type: 'type'
  };

  export type UrlScalarFieldEnum = (typeof UrlScalarFieldEnum)[keyof typeof UrlScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringNullableFilter | string | null
    password?: StringFilter | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    password?: StringWithAggregatesFilter | string
  }

  export type AlbumWhereInput = {
    AND?: Enumerable<AlbumWhereInput>
    OR?: Enumerable<AlbumWhereInput>
    NOT?: Enumerable<AlbumWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    label?: StringFilter | string
    photos?: PhotoListRelationFilter
    mainPhotoId?: StringFilter | string
    main?: XOR<PhotoRelationFilter, PhotoWhereInput>
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    label?: SortOrder
    photos?: PhotoOrderByRelationAggregateInput
    mainPhotoId?: SortOrder
    main?: PhotoOrderByWithRelationInput
  }

  export type AlbumWhereUniqueInput = {
    id?: string
  }

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    label?: SortOrder
    mainPhotoId?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AlbumScalarWhereWithAggregatesInput>
    OR?: Enumerable<AlbumScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AlbumScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    label?: StringWithAggregatesFilter | string
    mainPhotoId?: StringWithAggregatesFilter | string
  }

  export type ImageFileWhereInput = {
    AND?: Enumerable<ImageFileWhereInput>
    OR?: Enumerable<ImageFileWhereInput>
    NOT?: Enumerable<ImageFileWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    original?: StringFilter | string
    small?: StringFilter | string
    large?: StringFilter | string
    originalFor?: XOR<PhotoRelationFilter, PhotoWhereInput> | null
    editedFor?: XOR<PhotoRelationFilter, PhotoWhereInput> | null
  }

  export type ImageFileOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    original?: SortOrder
    small?: SortOrder
    large?: SortOrder
    originalFor?: PhotoOrderByWithRelationInput
    editedFor?: PhotoOrderByWithRelationInput
  }

  export type ImageFileWhereUniqueInput = {
    id?: string
  }

  export type ImageFileOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    original?: SortOrder
    small?: SortOrder
    large?: SortOrder
    _count?: ImageFileCountOrderByAggregateInput
    _max?: ImageFileMaxOrderByAggregateInput
    _min?: ImageFileMinOrderByAggregateInput
  }

  export type ImageFileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImageFileScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImageFileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImageFileScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    original?: StringWithAggregatesFilter | string
    small?: StringWithAggregatesFilter | string
    large?: StringWithAggregatesFilter | string
  }

  export type PhotoWhereInput = {
    AND?: Enumerable<PhotoWhereInput>
    OR?: Enumerable<PhotoWhereInput>
    NOT?: Enumerable<PhotoWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    originalFileId?: StringFilter | string
    originalFile?: XOR<ImageFileRelationFilter, ImageFileWhereInput>
    editedFileId?: StringFilter | string
    editedFile?: XOR<ImageFileRelationFilter, ImageFileWhereInput>
    albumId?: StringFilter | string
    album?: XOR<AlbumRelationFilter, AlbumWhereInput>
    label?: StringFilter | string
    Album?: AlbumListRelationFilter
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    originalFileId?: SortOrder
    originalFile?: ImageFileOrderByWithRelationInput
    editedFileId?: SortOrder
    editedFile?: ImageFileOrderByWithRelationInput
    albumId?: SortOrder
    album?: AlbumOrderByWithRelationInput
    label?: SortOrder
    Album?: AlbumOrderByRelationAggregateInput
  }

  export type PhotoWhereUniqueInput = {
    id?: string
    originalFileId?: string
    editedFileId?: string
  }

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    originalFileId?: SortOrder
    editedFileId?: SortOrder
    albumId?: SortOrder
    label?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PhotoScalarWhereWithAggregatesInput>
    OR?: Enumerable<PhotoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PhotoScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    originalFileId?: StringWithAggregatesFilter | string
    editedFileId?: StringWithAggregatesFilter | string
    albumId?: StringWithAggregatesFilter | string
    label?: StringWithAggregatesFilter | string
  }

  export type UrlWhereInput = {
    AND?: Enumerable<UrlWhereInput>
    OR?: Enumerable<UrlWhereInput>
    NOT?: Enumerable<UrlWhereInput>
    token?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    expiresAt?: DateTimeFilter | Date | string
    type?: EnumUrlTypeFilter | UrlType
  }

  export type UrlOrderByWithRelationInput = {
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    type?: SortOrder
  }

  export type UrlWhereUniqueInput = {
    token?: string
  }

  export type UrlOrderByWithAggregationInput = {
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    type?: SortOrder
    _count?: UrlCountOrderByAggregateInput
    _max?: UrlMaxOrderByAggregateInput
    _min?: UrlMinOrderByAggregateInput
  }

  export type UrlScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UrlScalarWhereWithAggregatesInput>
    OR?: Enumerable<UrlScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UrlScalarWhereWithAggregatesInput>
    token?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    expiresAt?: DateTimeWithAggregatesFilter | Date | string
    type?: EnumUrlTypeWithAggregatesFilter | UrlType
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumCreateInput = {
    id?: string
    createdAt?: Date | string
    label: string
    photos?: PhotoCreateNestedManyWithoutAlbumInput
    main: PhotoCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    label: string
    mainPhotoId: string
    photos?: PhotoUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
    photos?: PhotoUpdateManyWithoutAlbumInput
    main?: PhotoUpdateOneRequiredWithoutAlbumInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
    mainPhotoId?: StringFieldUpdateOperationsInput | string
    photos?: PhotoUncheckedUpdateManyWithoutAlbumInput
  }

  export type AlbumCreateManyInput = {
    id?: string
    createdAt?: Date | string
    label: string
    mainPhotoId: string
  }

  export type AlbumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
    mainPhotoId?: StringFieldUpdateOperationsInput | string
  }

  export type ImageFileCreateInput = {
    id?: string
    createdAt?: Date | string
    original: string
    small: string
    large: string
    originalFor?: PhotoCreateNestedOneWithoutOriginalFileInput
    editedFor?: PhotoCreateNestedOneWithoutEditedFileInput
  }

  export type ImageFileUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    original: string
    small: string
    large: string
    originalFor?: PhotoUncheckedCreateNestedOneWithoutOriginalFileInput
    editedFor?: PhotoUncheckedCreateNestedOneWithoutEditedFileInput
  }

  export type ImageFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    original?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    originalFor?: PhotoUpdateOneWithoutOriginalFileInput
    editedFor?: PhotoUpdateOneWithoutEditedFileInput
  }

  export type ImageFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    original?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    originalFor?: PhotoUncheckedUpdateOneWithoutOriginalFileInput
    editedFor?: PhotoUncheckedUpdateOneWithoutEditedFileInput
  }

  export type ImageFileCreateManyInput = {
    id?: string
    createdAt?: Date | string
    original: string
    small: string
    large: string
  }

  export type ImageFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    original?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
  }

  export type ImageFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    original?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoCreateInput = {
    id?: string
    createdAt?: Date | string
    label: string
    originalFile: ImageFileCreateNestedOneWithoutOriginalForInput
    editedFile: ImageFileCreateNestedOneWithoutEditedForInput
    album: AlbumCreateNestedOneWithoutPhotosInput
    Album?: AlbumCreateNestedManyWithoutMainInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    originalFileId: string
    editedFileId: string
    albumId: string
    label: string
    Album?: AlbumUncheckedCreateNestedManyWithoutMainInput
  }

  export type PhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
    originalFile?: ImageFileUpdateOneRequiredWithoutOriginalForInput
    editedFile?: ImageFileUpdateOneRequiredWithoutEditedForInput
    album?: AlbumUpdateOneRequiredWithoutPhotosInput
    Album?: AlbumUpdateManyWithoutMainInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalFileId?: StringFieldUpdateOperationsInput | string
    editedFileId?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    Album?: AlbumUncheckedUpdateManyWithoutMainInput
  }

  export type PhotoCreateManyInput = {
    id?: string
    createdAt?: Date | string
    originalFileId: string
    editedFileId: string
    albumId: string
    label: string
  }

  export type PhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalFileId?: StringFieldUpdateOperationsInput | string
    editedFileId?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type UrlCreateInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    type: UrlType
  }

  export type UrlUncheckedCreateInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    type: UrlType
  }

  export type UrlUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUrlTypeFieldUpdateOperationsInput | UrlType
  }

  export type UrlUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUrlTypeFieldUpdateOperationsInput | UrlType
  }

  export type UrlCreateManyInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    type: UrlType
  }

  export type UrlUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUrlTypeFieldUpdateOperationsInput | UrlType
  }

  export type UrlUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUrlTypeFieldUpdateOperationsInput | UrlType
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type PhotoRelationFilter = {
    is?: PhotoWhereInput | null
    isNot?: PhotoWhereInput | null
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    label?: SortOrder
    mainPhotoId?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    label?: SortOrder
    mainPhotoId?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    label?: SortOrder
    mainPhotoId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ImageFileCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    original?: SortOrder
    small?: SortOrder
    large?: SortOrder
  }

  export type ImageFileMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    original?: SortOrder
    small?: SortOrder
    large?: SortOrder
  }

  export type ImageFileMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    original?: SortOrder
    small?: SortOrder
    large?: SortOrder
  }

  export type ImageFileRelationFilter = {
    is?: ImageFileWhereInput
    isNot?: ImageFileWhereInput
  }

  export type AlbumRelationFilter = {
    is?: AlbumWhereInput
    isNot?: AlbumWhereInput
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    originalFileId?: SortOrder
    editedFileId?: SortOrder
    albumId?: SortOrder
    label?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    originalFileId?: SortOrder
    editedFileId?: SortOrder
    albumId?: SortOrder
    label?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    originalFileId?: SortOrder
    editedFileId?: SortOrder
    albumId?: SortOrder
    label?: SortOrder
  }

  export type EnumUrlTypeFilter = {
    equals?: UrlType
    in?: Enumerable<UrlType>
    notIn?: Enumerable<UrlType>
    not?: NestedEnumUrlTypeFilter | UrlType
  }

  export type UrlCountOrderByAggregateInput = {
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    type?: SortOrder
  }

  export type UrlMaxOrderByAggregateInput = {
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    type?: SortOrder
  }

  export type UrlMinOrderByAggregateInput = {
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    type?: SortOrder
  }

  export type EnumUrlTypeWithAggregatesFilter = {
    equals?: UrlType
    in?: Enumerable<UrlType>
    notIn?: Enumerable<UrlType>
    not?: NestedEnumUrlTypeWithAggregatesFilter | UrlType
    _count?: NestedIntFilter
    _min?: NestedEnumUrlTypeFilter
    _max?: NestedEnumUrlTypeFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PhotoCreateNestedManyWithoutAlbumInput = {
    create?: XOR<Enumerable<PhotoCreateWithoutAlbumInput>, Enumerable<PhotoUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<PhotoCreateOrConnectWithoutAlbumInput>
    createMany?: PhotoCreateManyAlbumInputEnvelope
    connect?: Enumerable<PhotoWhereUniqueInput>
  }

  export type PhotoCreateNestedOneWithoutAlbumInput = {
    create?: XOR<PhotoCreateWithoutAlbumInput, PhotoUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutAlbumInput
    connect?: PhotoWhereUniqueInput
  }

  export type PhotoUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<Enumerable<PhotoCreateWithoutAlbumInput>, Enumerable<PhotoUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<PhotoCreateOrConnectWithoutAlbumInput>
    createMany?: PhotoCreateManyAlbumInputEnvelope
    connect?: Enumerable<PhotoWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PhotoUpdateManyWithoutAlbumInput = {
    create?: XOR<Enumerable<PhotoCreateWithoutAlbumInput>, Enumerable<PhotoUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<PhotoCreateOrConnectWithoutAlbumInput>
    upsert?: Enumerable<PhotoUpsertWithWhereUniqueWithoutAlbumInput>
    createMany?: PhotoCreateManyAlbumInputEnvelope
    set?: Enumerable<PhotoWhereUniqueInput>
    disconnect?: Enumerable<PhotoWhereUniqueInput>
    delete?: Enumerable<PhotoWhereUniqueInput>
    connect?: Enumerable<PhotoWhereUniqueInput>
    update?: Enumerable<PhotoUpdateWithWhereUniqueWithoutAlbumInput>
    updateMany?: Enumerable<PhotoUpdateManyWithWhereWithoutAlbumInput>
    deleteMany?: Enumerable<PhotoScalarWhereInput>
  }

  export type PhotoUpdateOneRequiredWithoutAlbumInput = {
    create?: XOR<PhotoCreateWithoutAlbumInput, PhotoUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutAlbumInput
    upsert?: PhotoUpsertWithoutAlbumInput
    connect?: PhotoWhereUniqueInput
    update?: XOR<PhotoUpdateWithoutAlbumInput, PhotoUncheckedUpdateWithoutAlbumInput>
  }

  export type PhotoUncheckedUpdateManyWithoutAlbumInput = {
    create?: XOR<Enumerable<PhotoCreateWithoutAlbumInput>, Enumerable<PhotoUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<PhotoCreateOrConnectWithoutAlbumInput>
    upsert?: Enumerable<PhotoUpsertWithWhereUniqueWithoutAlbumInput>
    createMany?: PhotoCreateManyAlbumInputEnvelope
    set?: Enumerable<PhotoWhereUniqueInput>
    disconnect?: Enumerable<PhotoWhereUniqueInput>
    delete?: Enumerable<PhotoWhereUniqueInput>
    connect?: Enumerable<PhotoWhereUniqueInput>
    update?: Enumerable<PhotoUpdateWithWhereUniqueWithoutAlbumInput>
    updateMany?: Enumerable<PhotoUpdateManyWithWhereWithoutAlbumInput>
    deleteMany?: Enumerable<PhotoScalarWhereInput>
  }

  export type PhotoCreateNestedOneWithoutOriginalFileInput = {
    create?: XOR<PhotoCreateWithoutOriginalFileInput, PhotoUncheckedCreateWithoutOriginalFileInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutOriginalFileInput
    connect?: PhotoWhereUniqueInput
  }

  export type PhotoCreateNestedOneWithoutEditedFileInput = {
    create?: XOR<PhotoCreateWithoutEditedFileInput, PhotoUncheckedCreateWithoutEditedFileInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutEditedFileInput
    connect?: PhotoWhereUniqueInput
  }

  export type PhotoUncheckedCreateNestedOneWithoutOriginalFileInput = {
    create?: XOR<PhotoCreateWithoutOriginalFileInput, PhotoUncheckedCreateWithoutOriginalFileInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutOriginalFileInput
    connect?: PhotoWhereUniqueInput
  }

  export type PhotoUncheckedCreateNestedOneWithoutEditedFileInput = {
    create?: XOR<PhotoCreateWithoutEditedFileInput, PhotoUncheckedCreateWithoutEditedFileInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutEditedFileInput
    connect?: PhotoWhereUniqueInput
  }

  export type PhotoUpdateOneWithoutOriginalFileInput = {
    create?: XOR<PhotoCreateWithoutOriginalFileInput, PhotoUncheckedCreateWithoutOriginalFileInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutOriginalFileInput
    upsert?: PhotoUpsertWithoutOriginalFileInput
    disconnect?: boolean
    delete?: boolean
    connect?: PhotoWhereUniqueInput
    update?: XOR<PhotoUpdateWithoutOriginalFileInput, PhotoUncheckedUpdateWithoutOriginalFileInput>
  }

  export type PhotoUpdateOneWithoutEditedFileInput = {
    create?: XOR<PhotoCreateWithoutEditedFileInput, PhotoUncheckedCreateWithoutEditedFileInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutEditedFileInput
    upsert?: PhotoUpsertWithoutEditedFileInput
    disconnect?: boolean
    delete?: boolean
    connect?: PhotoWhereUniqueInput
    update?: XOR<PhotoUpdateWithoutEditedFileInput, PhotoUncheckedUpdateWithoutEditedFileInput>
  }

  export type PhotoUncheckedUpdateOneWithoutOriginalFileInput = {
    create?: XOR<PhotoCreateWithoutOriginalFileInput, PhotoUncheckedCreateWithoutOriginalFileInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutOriginalFileInput
    upsert?: PhotoUpsertWithoutOriginalFileInput
    disconnect?: boolean
    delete?: boolean
    connect?: PhotoWhereUniqueInput
    update?: XOR<PhotoUpdateWithoutOriginalFileInput, PhotoUncheckedUpdateWithoutOriginalFileInput>
  }

  export type PhotoUncheckedUpdateOneWithoutEditedFileInput = {
    create?: XOR<PhotoCreateWithoutEditedFileInput, PhotoUncheckedCreateWithoutEditedFileInput>
    connectOrCreate?: PhotoCreateOrConnectWithoutEditedFileInput
    upsert?: PhotoUpsertWithoutEditedFileInput
    disconnect?: boolean
    delete?: boolean
    connect?: PhotoWhereUniqueInput
    update?: XOR<PhotoUpdateWithoutEditedFileInput, PhotoUncheckedUpdateWithoutEditedFileInput>
  }

  export type ImageFileCreateNestedOneWithoutOriginalForInput = {
    create?: XOR<ImageFileCreateWithoutOriginalForInput, ImageFileUncheckedCreateWithoutOriginalForInput>
    connectOrCreate?: ImageFileCreateOrConnectWithoutOriginalForInput
    connect?: ImageFileWhereUniqueInput
  }

  export type ImageFileCreateNestedOneWithoutEditedForInput = {
    create?: XOR<ImageFileCreateWithoutEditedForInput, ImageFileUncheckedCreateWithoutEditedForInput>
    connectOrCreate?: ImageFileCreateOrConnectWithoutEditedForInput
    connect?: ImageFileWhereUniqueInput
  }

  export type AlbumCreateNestedOneWithoutPhotosInput = {
    create?: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutPhotosInput
    connect?: AlbumWhereUniqueInput
  }

  export type AlbumCreateNestedManyWithoutMainInput = {
    create?: XOR<Enumerable<AlbumCreateWithoutMainInput>, Enumerable<AlbumUncheckedCreateWithoutMainInput>>
    connectOrCreate?: Enumerable<AlbumCreateOrConnectWithoutMainInput>
    createMany?: AlbumCreateManyMainInputEnvelope
    connect?: Enumerable<AlbumWhereUniqueInput>
  }

  export type AlbumUncheckedCreateNestedManyWithoutMainInput = {
    create?: XOR<Enumerable<AlbumCreateWithoutMainInput>, Enumerable<AlbumUncheckedCreateWithoutMainInput>>
    connectOrCreate?: Enumerable<AlbumCreateOrConnectWithoutMainInput>
    createMany?: AlbumCreateManyMainInputEnvelope
    connect?: Enumerable<AlbumWhereUniqueInput>
  }

  export type ImageFileUpdateOneRequiredWithoutOriginalForInput = {
    create?: XOR<ImageFileCreateWithoutOriginalForInput, ImageFileUncheckedCreateWithoutOriginalForInput>
    connectOrCreate?: ImageFileCreateOrConnectWithoutOriginalForInput
    upsert?: ImageFileUpsertWithoutOriginalForInput
    connect?: ImageFileWhereUniqueInput
    update?: XOR<ImageFileUpdateWithoutOriginalForInput, ImageFileUncheckedUpdateWithoutOriginalForInput>
  }

  export type ImageFileUpdateOneRequiredWithoutEditedForInput = {
    create?: XOR<ImageFileCreateWithoutEditedForInput, ImageFileUncheckedCreateWithoutEditedForInput>
    connectOrCreate?: ImageFileCreateOrConnectWithoutEditedForInput
    upsert?: ImageFileUpsertWithoutEditedForInput
    connect?: ImageFileWhereUniqueInput
    update?: XOR<ImageFileUpdateWithoutEditedForInput, ImageFileUncheckedUpdateWithoutEditedForInput>
  }

  export type AlbumUpdateOneRequiredWithoutPhotosInput = {
    create?: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutPhotosInput
    upsert?: AlbumUpsertWithoutPhotosInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<AlbumUpdateWithoutPhotosInput, AlbumUncheckedUpdateWithoutPhotosInput>
  }

  export type AlbumUpdateManyWithoutMainInput = {
    create?: XOR<Enumerable<AlbumCreateWithoutMainInput>, Enumerable<AlbumUncheckedCreateWithoutMainInput>>
    connectOrCreate?: Enumerable<AlbumCreateOrConnectWithoutMainInput>
    upsert?: Enumerable<AlbumUpsertWithWhereUniqueWithoutMainInput>
    createMany?: AlbumCreateManyMainInputEnvelope
    set?: Enumerable<AlbumWhereUniqueInput>
    disconnect?: Enumerable<AlbumWhereUniqueInput>
    delete?: Enumerable<AlbumWhereUniqueInput>
    connect?: Enumerable<AlbumWhereUniqueInput>
    update?: Enumerable<AlbumUpdateWithWhereUniqueWithoutMainInput>
    updateMany?: Enumerable<AlbumUpdateManyWithWhereWithoutMainInput>
    deleteMany?: Enumerable<AlbumScalarWhereInput>
  }

  export type AlbumUncheckedUpdateManyWithoutMainInput = {
    create?: XOR<Enumerable<AlbumCreateWithoutMainInput>, Enumerable<AlbumUncheckedCreateWithoutMainInput>>
    connectOrCreate?: Enumerable<AlbumCreateOrConnectWithoutMainInput>
    upsert?: Enumerable<AlbumUpsertWithWhereUniqueWithoutMainInput>
    createMany?: AlbumCreateManyMainInputEnvelope
    set?: Enumerable<AlbumWhereUniqueInput>
    disconnect?: Enumerable<AlbumWhereUniqueInput>
    delete?: Enumerable<AlbumWhereUniqueInput>
    connect?: Enumerable<AlbumWhereUniqueInput>
    update?: Enumerable<AlbumUpdateWithWhereUniqueWithoutMainInput>
    updateMany?: Enumerable<AlbumUpdateManyWithWhereWithoutMainInput>
    deleteMany?: Enumerable<AlbumScalarWhereInput>
  }

  export type EnumUrlTypeFieldUpdateOperationsInput = {
    set?: UrlType
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumUrlTypeFilter = {
    equals?: UrlType
    in?: Enumerable<UrlType>
    notIn?: Enumerable<UrlType>
    not?: NestedEnumUrlTypeFilter | UrlType
  }

  export type NestedEnumUrlTypeWithAggregatesFilter = {
    equals?: UrlType
    in?: Enumerable<UrlType>
    notIn?: Enumerable<UrlType>
    not?: NestedEnumUrlTypeWithAggregatesFilter | UrlType
    _count?: NestedIntFilter
    _min?: NestedEnumUrlTypeFilter
    _max?: NestedEnumUrlTypeFilter
  }

  export type PhotoCreateWithoutAlbumInput = {
    id?: string
    createdAt?: Date | string
    label: string
    originalFile: ImageFileCreateNestedOneWithoutOriginalForInput
    editedFile: ImageFileCreateNestedOneWithoutEditedForInput
    Album?: AlbumCreateNestedManyWithoutMainInput
  }

  export type PhotoUncheckedCreateWithoutAlbumInput = {
    id?: string
    createdAt?: Date | string
    originalFileId: string
    editedFileId: string
    label: string
    Album?: AlbumUncheckedCreateNestedManyWithoutMainInput
  }

  export type PhotoCreateOrConnectWithoutAlbumInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutAlbumInput, PhotoUncheckedCreateWithoutAlbumInput>
  }

  export type PhotoCreateManyAlbumInputEnvelope = {
    data: Enumerable<PhotoCreateManyAlbumInput>
    skipDuplicates?: boolean
  }

  export type PhotoUpsertWithWhereUniqueWithoutAlbumInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutAlbumInput, PhotoUncheckedUpdateWithoutAlbumInput>
    create: XOR<PhotoCreateWithoutAlbumInput, PhotoUncheckedCreateWithoutAlbumInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutAlbumInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutAlbumInput, PhotoUncheckedUpdateWithoutAlbumInput>
  }

  export type PhotoUpdateManyWithWhereWithoutAlbumInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutPhotosInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: Enumerable<PhotoScalarWhereInput>
    OR?: Enumerable<PhotoScalarWhereInput>
    NOT?: Enumerable<PhotoScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    originalFileId?: StringFilter | string
    editedFileId?: StringFilter | string
    albumId?: StringFilter | string
    label?: StringFilter | string
  }

  export type PhotoUpsertWithoutAlbumInput = {
    update: XOR<PhotoUpdateWithoutAlbumInput, PhotoUncheckedUpdateWithoutAlbumInput>
    create: XOR<PhotoCreateWithoutAlbumInput, PhotoUncheckedCreateWithoutAlbumInput>
  }

  export type PhotoUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
    originalFile?: ImageFileUpdateOneRequiredWithoutOriginalForInput
    editedFile?: ImageFileUpdateOneRequiredWithoutEditedForInput
    Album?: AlbumUpdateManyWithoutMainInput
  }

  export type PhotoUncheckedUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalFileId?: StringFieldUpdateOperationsInput | string
    editedFileId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    Album?: AlbumUncheckedUpdateManyWithoutMainInput
  }

  export type PhotoCreateWithoutOriginalFileInput = {
    id?: string
    createdAt?: Date | string
    label: string
    editedFile: ImageFileCreateNestedOneWithoutEditedForInput
    album: AlbumCreateNestedOneWithoutPhotosInput
    Album?: AlbumCreateNestedManyWithoutMainInput
  }

  export type PhotoUncheckedCreateWithoutOriginalFileInput = {
    id?: string
    createdAt?: Date | string
    editedFileId: string
    albumId: string
    label: string
    Album?: AlbumUncheckedCreateNestedManyWithoutMainInput
  }

  export type PhotoCreateOrConnectWithoutOriginalFileInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutOriginalFileInput, PhotoUncheckedCreateWithoutOriginalFileInput>
  }

  export type PhotoCreateWithoutEditedFileInput = {
    id?: string
    createdAt?: Date | string
    label: string
    originalFile: ImageFileCreateNestedOneWithoutOriginalForInput
    album: AlbumCreateNestedOneWithoutPhotosInput
    Album?: AlbumCreateNestedManyWithoutMainInput
  }

  export type PhotoUncheckedCreateWithoutEditedFileInput = {
    id?: string
    createdAt?: Date | string
    originalFileId: string
    albumId: string
    label: string
    Album?: AlbumUncheckedCreateNestedManyWithoutMainInput
  }

  export type PhotoCreateOrConnectWithoutEditedFileInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutEditedFileInput, PhotoUncheckedCreateWithoutEditedFileInput>
  }

  export type PhotoUpsertWithoutOriginalFileInput = {
    update: XOR<PhotoUpdateWithoutOriginalFileInput, PhotoUncheckedUpdateWithoutOriginalFileInput>
    create: XOR<PhotoCreateWithoutOriginalFileInput, PhotoUncheckedCreateWithoutOriginalFileInput>
  }

  export type PhotoUpdateWithoutOriginalFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
    editedFile?: ImageFileUpdateOneRequiredWithoutEditedForInput
    album?: AlbumUpdateOneRequiredWithoutPhotosInput
    Album?: AlbumUpdateManyWithoutMainInput
  }

  export type PhotoUncheckedUpdateWithoutOriginalFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedFileId?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    Album?: AlbumUncheckedUpdateManyWithoutMainInput
  }

  export type PhotoUpsertWithoutEditedFileInput = {
    update: XOR<PhotoUpdateWithoutEditedFileInput, PhotoUncheckedUpdateWithoutEditedFileInput>
    create: XOR<PhotoCreateWithoutEditedFileInput, PhotoUncheckedCreateWithoutEditedFileInput>
  }

  export type PhotoUpdateWithoutEditedFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
    originalFile?: ImageFileUpdateOneRequiredWithoutOriginalForInput
    album?: AlbumUpdateOneRequiredWithoutPhotosInput
    Album?: AlbumUpdateManyWithoutMainInput
  }

  export type PhotoUncheckedUpdateWithoutEditedFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalFileId?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    Album?: AlbumUncheckedUpdateManyWithoutMainInput
  }

  export type ImageFileCreateWithoutOriginalForInput = {
    id?: string
    createdAt?: Date | string
    original: string
    small: string
    large: string
    editedFor?: PhotoCreateNestedOneWithoutEditedFileInput
  }

  export type ImageFileUncheckedCreateWithoutOriginalForInput = {
    id?: string
    createdAt?: Date | string
    original: string
    small: string
    large: string
    editedFor?: PhotoUncheckedCreateNestedOneWithoutEditedFileInput
  }

  export type ImageFileCreateOrConnectWithoutOriginalForInput = {
    where: ImageFileWhereUniqueInput
    create: XOR<ImageFileCreateWithoutOriginalForInput, ImageFileUncheckedCreateWithoutOriginalForInput>
  }

  export type ImageFileCreateWithoutEditedForInput = {
    id?: string
    createdAt?: Date | string
    original: string
    small: string
    large: string
    originalFor?: PhotoCreateNestedOneWithoutOriginalFileInput
  }

  export type ImageFileUncheckedCreateWithoutEditedForInput = {
    id?: string
    createdAt?: Date | string
    original: string
    small: string
    large: string
    originalFor?: PhotoUncheckedCreateNestedOneWithoutOriginalFileInput
  }

  export type ImageFileCreateOrConnectWithoutEditedForInput = {
    where: ImageFileWhereUniqueInput
    create: XOR<ImageFileCreateWithoutEditedForInput, ImageFileUncheckedCreateWithoutEditedForInput>
  }

  export type AlbumCreateWithoutPhotosInput = {
    id?: string
    createdAt?: Date | string
    label: string
    main: PhotoCreateNestedOneWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutPhotosInput = {
    id?: string
    createdAt?: Date | string
    label: string
    mainPhotoId: string
  }

  export type AlbumCreateOrConnectWithoutPhotosInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
  }

  export type AlbumCreateWithoutMainInput = {
    id?: string
    createdAt?: Date | string
    label: string
    photos?: PhotoCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutMainInput = {
    id?: string
    createdAt?: Date | string
    label: string
    photos?: PhotoUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutMainInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutMainInput, AlbumUncheckedCreateWithoutMainInput>
  }

  export type AlbumCreateManyMainInputEnvelope = {
    data: Enumerable<AlbumCreateManyMainInput>
    skipDuplicates?: boolean
  }

  export type ImageFileUpsertWithoutOriginalForInput = {
    update: XOR<ImageFileUpdateWithoutOriginalForInput, ImageFileUncheckedUpdateWithoutOriginalForInput>
    create: XOR<ImageFileCreateWithoutOriginalForInput, ImageFileUncheckedCreateWithoutOriginalForInput>
  }

  export type ImageFileUpdateWithoutOriginalForInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    original?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    editedFor?: PhotoUpdateOneWithoutEditedFileInput
  }

  export type ImageFileUncheckedUpdateWithoutOriginalForInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    original?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    editedFor?: PhotoUncheckedUpdateOneWithoutEditedFileInput
  }

  export type ImageFileUpsertWithoutEditedForInput = {
    update: XOR<ImageFileUpdateWithoutEditedForInput, ImageFileUncheckedUpdateWithoutEditedForInput>
    create: XOR<ImageFileCreateWithoutEditedForInput, ImageFileUncheckedCreateWithoutEditedForInput>
  }

  export type ImageFileUpdateWithoutEditedForInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    original?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    originalFor?: PhotoUpdateOneWithoutOriginalFileInput
  }

  export type ImageFileUncheckedUpdateWithoutEditedForInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    original?: StringFieldUpdateOperationsInput | string
    small?: StringFieldUpdateOperationsInput | string
    large?: StringFieldUpdateOperationsInput | string
    originalFor?: PhotoUncheckedUpdateOneWithoutOriginalFileInput
  }

  export type AlbumUpsertWithoutPhotosInput = {
    update: XOR<AlbumUpdateWithoutPhotosInput, AlbumUncheckedUpdateWithoutPhotosInput>
    create: XOR<AlbumCreateWithoutPhotosInput, AlbumUncheckedCreateWithoutPhotosInput>
  }

  export type AlbumUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
    main?: PhotoUpdateOneRequiredWithoutAlbumInput
  }

  export type AlbumUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
    mainPhotoId?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumUpsertWithWhereUniqueWithoutMainInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutMainInput, AlbumUncheckedUpdateWithoutMainInput>
    create: XOR<AlbumCreateWithoutMainInput, AlbumUncheckedCreateWithoutMainInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutMainInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutMainInput, AlbumUncheckedUpdateWithoutMainInput>
  }

  export type AlbumUpdateManyWithWhereWithoutMainInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutAlbumInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: Enumerable<AlbumScalarWhereInput>
    OR?: Enumerable<AlbumScalarWhereInput>
    NOT?: Enumerable<AlbumScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    label?: StringFilter | string
    mainPhotoId?: StringFilter | string
  }

  export type PhotoCreateManyAlbumInput = {
    id?: string
    createdAt?: Date | string
    originalFileId: string
    editedFileId: string
    label: string
  }

  export type PhotoUncheckedUpdateManyWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalFileId?: StringFieldUpdateOperationsInput | string
    editedFileId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumCreateManyMainInput = {
    id?: string
    createdAt?: Date | string
    label: string
  }

  export type AlbumUpdateWithoutMainInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
    photos?: PhotoUpdateManyWithoutAlbumInput
  }

  export type AlbumUncheckedUpdateWithoutMainInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
    photos?: PhotoUncheckedUpdateManyWithoutAlbumInput
  }

  export type AlbumUncheckedUpdateManyWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    label?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}