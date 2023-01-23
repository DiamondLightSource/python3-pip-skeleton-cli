Creating an Anaconda Token
==========================

To publish your package on Anaconda.org requires an Anaconda account and for GitHub
Actions to have an Anaconda token authorizing access to that account.


The simplest approach is to set up an token that is scoped to your Anaconda account
and add it to the secrets for your GitHub Organization (or user). This means
that all new projects created in the Organization will automatically gain
permission to publish to Anaconda.org.

If you do not already have a Anaconda account use this link: create_account_.
You may wish to additionally create an organisation, using this link: create_organisation_.

To learn how to create a token see: creating_a_token_.
To learn how to add this token to a github repository see: creating_a_secret_.
Note that skeleton uses ``ANACONDA_TOKEN`` as the secret name.

.. _create_account: https://anaconda.org/account/register
.. _create_organisation: https://anaconda.org/garryod/organizations
.. _creating_a_token: https://docs.anaconda.com/anacondaorg/user-guide/tasks/work-with-accounts/#creating-access-tokens
.. _creating_a_secret: https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository