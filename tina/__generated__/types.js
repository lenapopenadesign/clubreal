export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const HomePagePartsFragmentDoc = gql`
    fragment HomePageParts on HomePage {
  __typename
  heroHeading
  heroSubtext
  heroCta
  featuresLabel
  featuresHeading
  featuresSubtext
  features {
    __typename
    icon
    title
    description
  }
  missionLabel
  missionHeading
  missionBody
  missionQuote
}
    `;
export const WarumPagePartsFragmentDoc = gql`
    fragment WarumPageParts on WarumPage {
  __typename
  heroBadge
  heroHeading
  heroSubtext
  benefitsLabel
  benefitsHeading
  benefits {
    __typename
    icon
    title
    description
  }
  ctaLabel
  ctaHeading
  ctaBody
  ctaButtonLabel
}
    `;
export const CrsvPagePartsFragmentDoc = gql`
    fragment CrsvPageParts on CrsvPage {
  __typename
  heroHeading
  heroSubtext
  valuesIntro
  values {
    __typename
    icon
    title
    description
  }
  legalText
}
    `;
export const KontaktPagePartsFragmentDoc = gql`
    fragment KontaktPageParts on KontaktPage {
  __typename
  heroHeading
  heroBody
}
    `;
export const DatenschutzPagePartsFragmentDoc = gql`
    fragment DatenschutzPageParts on DatenschutzPage {
  __typename
  heroHeading
  heroSubtext
  sections {
    __typename
    heading
    body
  }
}
    `;
export const ImpressumPagePartsFragmentDoc = gql`
    fragment ImpressumPageParts on ImpressumPage {
  __typename
  heroHeading
  heroSubtext
  sections {
    __typename
    heading
    body
  }
}
    `;
export const StatutenPagePartsFragmentDoc = gql`
    fragment StatutenPageParts on StatutenPage {
  __typename
  heroHeading
  heroSubtext
  pdfUrl
  pdfButtonLabel
  sections {
    __typename
    heading
    body
  }
  footerNote
}
    `;
export const MembersDocPartsFragmentDoc = gql`
    fragment MembersDocParts on MembersDoc {
  __typename
  members {
    __typename
    name
    role
    location
    links {
      __typename
      type
      url
    }
  }
}
    `;
export const HomePageDocument = gql`
    query homePage($relativePath: String!) {
  homePage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomePageParts
  }
}
    ${HomePagePartsFragmentDoc}`;
export const HomePageConnectionDocument = gql`
    query homePageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomePageFilter) {
  homePageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomePageParts
      }
    }
  }
}
    ${HomePagePartsFragmentDoc}`;
export const WarumPageDocument = gql`
    query warumPage($relativePath: String!) {
  warumPage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...WarumPageParts
  }
}
    ${WarumPagePartsFragmentDoc}`;
export const WarumPageConnectionDocument = gql`
    query warumPageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: WarumPageFilter) {
  warumPageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...WarumPageParts
      }
    }
  }
}
    ${WarumPagePartsFragmentDoc}`;
export const CrsvPageDocument = gql`
    query crsvPage($relativePath: String!) {
  crsvPage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CrsvPageParts
  }
}
    ${CrsvPagePartsFragmentDoc}`;
export const CrsvPageConnectionDocument = gql`
    query crsvPageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CrsvPageFilter) {
  crsvPageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CrsvPageParts
      }
    }
  }
}
    ${CrsvPagePartsFragmentDoc}`;
export const KontaktPageDocument = gql`
    query kontaktPage($relativePath: String!) {
  kontaktPage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...KontaktPageParts
  }
}
    ${KontaktPagePartsFragmentDoc}`;
export const KontaktPageConnectionDocument = gql`
    query kontaktPageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: KontaktPageFilter) {
  kontaktPageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...KontaktPageParts
      }
    }
  }
}
    ${KontaktPagePartsFragmentDoc}`;
export const DatenschutzPageDocument = gql`
    query datenschutzPage($relativePath: String!) {
  datenschutzPage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DatenschutzPageParts
  }
}
    ${DatenschutzPagePartsFragmentDoc}`;
export const DatenschutzPageConnectionDocument = gql`
    query datenschutzPageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DatenschutzPageFilter) {
  datenschutzPageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DatenschutzPageParts
      }
    }
  }
}
    ${DatenschutzPagePartsFragmentDoc}`;
export const ImpressumPageDocument = gql`
    query impressumPage($relativePath: String!) {
  impressumPage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ImpressumPageParts
  }
}
    ${ImpressumPagePartsFragmentDoc}`;
export const ImpressumPageConnectionDocument = gql`
    query impressumPageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ImpressumPageFilter) {
  impressumPageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ImpressumPageParts
      }
    }
  }
}
    ${ImpressumPagePartsFragmentDoc}`;
export const StatutenPageDocument = gql`
    query statutenPage($relativePath: String!) {
  statutenPage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...StatutenPageParts
  }
}
    ${StatutenPagePartsFragmentDoc}`;
export const StatutenPageConnectionDocument = gql`
    query statutenPageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: StatutenPageFilter) {
  statutenPageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...StatutenPageParts
      }
    }
  }
}
    ${StatutenPagePartsFragmentDoc}`;
export const MembersDocDocument = gql`
    query membersDoc($relativePath: String!) {
  membersDoc(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...MembersDocParts
  }
}
    ${MembersDocPartsFragmentDoc}`;
export const MembersDocConnectionDocument = gql`
    query membersDocConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: MembersDocFilter) {
  membersDocConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...MembersDocParts
      }
    }
  }
}
    ${MembersDocPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    homePage(variables, options) {
      return requester(HomePageDocument, variables, options);
    },
    homePageConnection(variables, options) {
      return requester(HomePageConnectionDocument, variables, options);
    },
    warumPage(variables, options) {
      return requester(WarumPageDocument, variables, options);
    },
    warumPageConnection(variables, options) {
      return requester(WarumPageConnectionDocument, variables, options);
    },
    crsvPage(variables, options) {
      return requester(CrsvPageDocument, variables, options);
    },
    crsvPageConnection(variables, options) {
      return requester(CrsvPageConnectionDocument, variables, options);
    },
    kontaktPage(variables, options) {
      return requester(KontaktPageDocument, variables, options);
    },
    kontaktPageConnection(variables, options) {
      return requester(KontaktPageConnectionDocument, variables, options);
    },
    datenschutzPage(variables, options) {
      return requester(DatenschutzPageDocument, variables, options);
    },
    datenschutzPageConnection(variables, options) {
      return requester(DatenschutzPageConnectionDocument, variables, options);
    },
    impressumPage(variables, options) {
      return requester(ImpressumPageDocument, variables, options);
    },
    impressumPageConnection(variables, options) {
      return requester(ImpressumPageConnectionDocument, variables, options);
    },
    statutenPage(variables, options) {
      return requester(StatutenPageDocument, variables, options);
    },
    statutenPageConnection(variables, options) {
      return requester(StatutenPageConnectionDocument, variables, options);
    },
    membersDoc(variables, options) {
      return requester(MembersDocDocument, variables, options);
    },
    membersDocConnection(variables, options) {
      return requester(MembersDocConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
