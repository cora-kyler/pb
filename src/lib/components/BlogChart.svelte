<script lang="ts">
	interface Props {
		title?: string;
		headers?: string[];
		rows: { cells: string[]; bold?: number[] }[];
		columnWidths?: string[];
	}

	let { title = '', headers = [], rows, columnWidths = [] }: Props = $props();
</script>

<div class="overflow-x-auto">
	<div class="bg-dark-grey text-off-white rounded-t-lg">
		{#if title && headers.length === 0}
			<div class="p-3 text-left font-semibold">{title}</div>
		{:else if headers.length > 0}
			<table class="w-full text-xs border-collapse {columnWidths.length > 0 ? 'table-fixed' : ''}">
				{#if columnWidths.length > 0}
					<colgroup>
						{#each columnWidths as width}
							<col class={width} />
						{/each}
					</colgroup>
				{/if}
				<thead>
					<tr>
						{#each headers as header}
							<th class="p-3 text-left font-semibold whitespace-normal">{header}</th>
						{/each}
					</tr>
				</thead>
			</table>
		{/if}
	</div>
	<div class="border border-dark-grey/10 border-t-0 rounded-b-lg overflow-hidden bg-off-white">
		<table class="w-full text-xs border-collapse {columnWidths.length > 0 ? 'table-fixed' : ''}">
			{#if columnWidths.length > 0}
				<colgroup>
					{#each columnWidths as width}
						<col class={width} />
					{/each}
				</colgroup>
			{/if}
			<tbody>
				{#each rows as row, rowIndex}
					<tr class="{rowIndex < rows.length - 1 ? 'border-b border-dark-grey/10' : ''} {rowIndex % 2 === 0 ? 'bg-light-grey/30' : ''}">
						{#each row.cells as cell, cellIndex}
							<td class="p-3 text-left {row.bold?.includes(cellIndex) ? 'font-semibold' : ''}">
								{@html cell}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
