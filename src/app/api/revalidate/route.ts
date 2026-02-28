import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag');

  if (!tag) {
    return NextResponse.json({ message: 'Missing tag parameter' }, { status: 400 });
  }

  // Stash was added to all unstable_cache uses
  const targetTag = tag === 'all' ? 'stash' : tag;

  try {
    revalidateTag(targetTag, 'default');

    return NextResponse.json({
      revalidated: true,
      target: targetTag,
      originalParam: tag,
      now: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ message: 'Revalidation failed', error }, { status: 500 });
  }
}
