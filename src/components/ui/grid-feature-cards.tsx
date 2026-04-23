import { cn } from '@/lib/utils';
import React from 'react';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
	const p = genRandomPattern();

	return (
		<div
			className={cn(
				'group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30',
				className
			)}
			{...props}
		>
			<GridPattern
				width={50}
				height={50}
				x="50%"
				y="0"
				squares={p}
				className="absolute inset-0 h-full w-full fill-primary/[0.03] stroke-primary/[0.06] opacity-50 transition-opacity group-hover:opacity-100 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"
			/>

			<div className="relative z-10">
				<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/15 bg-primary/5">
					<feature.icon className="h-6 w-6 text-primary" />
				</div>
			</div>

			<div className="relative z-10">
				<h3 className="font-heading text-lg font-bold text-foreground">{feature.title}</h3>
			</div>

			<p className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([sx, sy], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={sx * width} y={sy * height} />
					))}
				</svg>
			)}
		</svg>
	);
}

function genRandomPattern(length?: number): number[][] {
	length = length ?? 5;
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7,
		Math.floor(Math.random() * 6) + 1,
	]);
}
