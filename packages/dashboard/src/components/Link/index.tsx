import React from 'react';
import {
  Link as RouterLink,
} from 'react-router-dom';
import { styled } from '@stitched';
import { RouteNames, getRouteByName } from '@utils/routes';
import { trimAccount } from '@utils/account';

const Container = styled('span', {
  a: {
    color: '$defaultTxtColour',
    transition: 'opacity 0.2s',

    '&:hover': {
      opacity: 0.8,
      color: '$primaryBlue',
    },
  },

  variants: {
    tableLink: {
      true: {
        a: {
          color: '$primaryBlue',

          '&:hover': {
            color: '$defaultTxtColour',
          },
        },
      },
    },
  },
});

export const RawLink = ({
  to,
  children,
}: {
  to: RouteNames | string,
  children: React.ReactNode,
}) => (
  <RouterLink to={to}>
    {children}
  </RouterLink>
);

export const PrimaryLink = ({
  to,
  children,
  tableLink = false,
}: {
  to: string,
  children: React.ReactNode,
  tableLink: boolean,
}) => (
  <Container tableLink={tableLink}>
    <RouterLink to={to}>
      {children}
    </RouterLink>
  </Container>
);

enum ExternalLinks {
  docs = 'docs.cap.ooo',
  discord = 'discord.gg/yVEcEzmrgm',
  twitter = 'twitter.com/cap_ois',
}

export const ExternalLink = ({
  description,
  to,
}: {
  description: string,
  to: keyof typeof ExternalLinks,
}) => (
  <Container>
    <a rel="noreferrer" target="_blank" href={`https://${ExternalLinks[to]}`}>
      { description }
    </a>
  </Container>
);

export const AccountLink = ({
  account,
  trim,
}: {
  account: string,
  trim: boolean,
}) => (
  <PrimaryLink
    to={getRouteByName('AppTransactions', { id: account })}
    tableLink={true}
  >
    {trim ? trimAccount(account) : account}
  </PrimaryLink>
);
