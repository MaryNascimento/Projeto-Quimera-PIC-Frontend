export function formatErrorMessages(
  values: string[] | undefined
): Array<{ message?: string } | undefined> | undefined {
  if (!values) {
    return undefined;
  }

  return values?.map((item) => {
    if (item === undefined || item === '') {
      return undefined;
    }

    return { message: item };
  });
}
